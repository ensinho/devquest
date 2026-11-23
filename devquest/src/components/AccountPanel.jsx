import React, { useState } from 'react';
import {
  RotateCcw,
  LogOut,
  CloudUpload,
  Download,
  Trash2,
  BadgeCheck,
  MailWarning,
  Flame,
  CalendarDays,
  MonitorSmartphone,
} from 'lucide-react';
import { authErrorMessage } from '../utils/authErrors.js';

function formatDate(iso) {
  if (!iso) return '—';
  try {
    return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(iso));
  } catch {
    return '—';
  }
}

/** Guest: save-to-account pitch + local reset. Signed in: account facts, LGPD export/delete, sign out. */
export default function AccountPanel({
  isGuestMode,
  account,
  onOpenAuth,
  onResetSandbox,
  onLogout,
  onResendVerification,
  onExportData,
  onDeleteAccount,
}) {
  const [confirmingDelete, setConfirmingDelete] = useState(false);
  const [password, setPassword] = useState('');
  const [deleteError, setDeleteError] = useState('');
  const [busy, setBusy] = useState(false);

  if (isGuestMode) {
    return (
      <>
        <div className="dq-session-card">
          <h2 className="dq-h3">Salvar na nuvem</h2>
          <p className="dq-muted-text">
            Hoje seu progresso vive só neste navegador. Com uma conta ele vai junto para qualquer dispositivo, e o servidor
            confere cada quest que você conclui.
          </p>
          <button type="button" onClick={onOpenAuth} className="dq-btn dq-btn-secondary">
            <CloudUpload size={15} aria-hidden="true" />
            <span>Criar conta ou entrar</span>
          </button>
        </div>
        <div className="dq-session-card">
          <h2 className="dq-h3">Progresso local</h2>
          <p className="dq-muted-text">Reinicie apenas se quiser começar do nível 1.</p>
          <button type="button" onClick={onResetSandbox} className="dq-btn dq-btn-danger">
            <RotateCcw size={15} aria-hidden="true" />
            <span>Reiniciar progresso</span>
          </button>
        </div>
      </>
    );
  }

  const handleDelete = async (event) => {
    event.preventDefault();
    setDeleteError('');
    if (!password.trim()) {
      setDeleteError('Digite sua senha atual para confirmar a exclusão.');
      return;
    }
    setBusy(true);
    try {
      await onDeleteAccount(password);
    } catch (err) {
      setDeleteError(err?.code?.startsWith?.('auth/') ? authErrorMessage(err) : err?.message ?? 'Não foi possível excluir agora.');
      setBusy(false);
    }
  };

  return (
    <>
      <div className="dq-session-card">
        <h2 className="dq-h3">Sua conta</h2>
        <p className="dq-account-email">{account?.email ?? 'Conectando…'}</p>
        {account && (
          <>
            {account.emailVerified ? (
              <span className="dq-account-flag is-ok">
                <BadgeCheck size={15} aria-hidden="true" />
                E-mail confirmado
              </span>
            ) : (
              <div className="dq-account-verify">
                <span className="dq-account-flag is-warn">
                  <MailWarning size={15} aria-hidden="true" />
                  E-mail ainda não confirmado
                </span>
                <button type="button" className="dq-link-btn" onClick={onResendVerification}>
                  Reenviar link
                </button>
              </div>
            )}
            <dl className="dq-account-facts">
              <div>
                <dt>
                  <CalendarDays size={14} aria-hidden="true" /> Desde
                </dt>
                <dd>{formatDate(account.memberSince)}</dd>
              </div>
              <div>
                <dt>
                  <Flame size={14} aria-hidden="true" /> Dias seguidos
                </dt>
                <dd className="dq-tabular">{account.dayStreak ?? 0}</dd>
              </div>
              <div>
                <dt>
                  <MonitorSmartphone size={14} aria-hidden="true" /> Dispositivos
                </dt>
                <dd className="dq-tabular">{account.deviceCount ?? 1}</dd>
              </div>
            </dl>
          </>
        )}
        <button type="button" onClick={onLogout} className="dq-btn dq-btn-secondary">
          <LogOut size={15} aria-hidden="true" />
          <span>Sair da conta</span>
        </button>
      </div>

      <div className="dq-session-card">
        <h2 className="dq-h3">Seus dados</h2>
        <p className="dq-muted-text">
          Baixe tudo o que guardamos sobre você (progresso, soluções, histórico e dispositivos) ou apague a conta de vez.
        </p>
        <div className="dq-account-actions">
          <button type="button" onClick={onExportData} className="dq-btn dq-btn-secondary">
            <Download size={15} aria-hidden="true" />
            <span>Baixar meus dados</span>
          </button>
          {!confirmingDelete && (
            <button type="button" onClick={() => setConfirmingDelete(true)} className="dq-btn dq-btn-danger">
              <Trash2 size={15} aria-hidden="true" />
              <span>Excluir conta</span>
            </button>
          )}
        </div>

        {confirmingDelete && (
          <form className="dq-account-delete" onSubmit={handleDelete}>
            <p className="dq-muted-text">
              Isso apaga seu progresso, soluções e histórico para sempre. Digite sua senha para confirmar.
            </p>
            <label className="dq-field">
              <span>Senha</span>
              <input
                type="password"
                autoComplete="current-password"
                className="dq-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            {deleteError && (
              <p className="dq-auth-msg is-error" role="alert">
                {deleteError}
              </p>
            )}
            <div className="dq-account-actions">
              <button type="submit" className="dq-btn dq-btn-danger" disabled={busy} aria-busy={busy}>
                <Trash2 size={15} aria-hidden="true" />
                <span>{busy ? 'Apagando…' : 'Apagar tudo'}</span>
              </button>
              <button
                type="button"
                className="dq-btn dq-btn-ghost"
                onClick={() => {
                  setConfirmingDelete(false);
                  setPassword('');
                  setDeleteError('');
                }}
              >
                Cancelar
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
