import React, { useState, useEffect, useRef } from 'react';
import { X, CloudOff, Eye, EyeOff, MailCheck, ShieldCheck } from 'lucide-react';
import { authErrorMessage } from '../../utils/authErrors.js';

const COPY = {
  login: {
    title: 'Entrar na sua Toca',
    lead: 'Seu fox, seu XP e suas soluções em qualquer dispositivo.',
    submit: 'Entrar',
  },
  signup: {
    title: 'Criar conta',
    lead: 'O progresso deste navegador vai junto para a sua conta.',
    submit: 'Criar conta e salvar progresso',
  },
  reset: {
    title: 'Recuperar senha',
    lead: 'Enviamos um link para você criar uma senha nova.',
    submit: 'Enviar link',
  },
};

export default function AuthModal({ onClose, onLogin, onSignUp, onPasswordReset, isFirebaseConfigured }) {
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [busy, setBusy] = useState(false);
  const emailRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  useEffect(() => {
    emailRef.current?.focus();
  }, [mode]);

  const switchMode = (next) => {
    setMode(next);
    setError('');
    setNotice('');
    setPassword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setNotice('');
    const cleanEmail = email.trim();
    if (mode === 'signup' && password.length < 8) {
      setError('Use pelo menos 8 caracteres na senha.');
      return;
    }
    setBusy(true);
    try {
      if (mode === 'login') {
        await onLogin(cleanEmail, password);
      } else if (mode === 'signup') {
        await onSignUp(cleanEmail, password);
      } else {
        await onPasswordReset(cleanEmail);
        setNotice('Se existir uma conta com esse e-mail, o link chega em instantes. Confira o spam também.');
      }
    } catch (err) {
      setError(authErrorMessage(err));
    } finally {
      setBusy(false);
    }
  };

  const copy = COPY[mode];

  return (
    <div
      className="dq-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
      onClick={onClose}
    >
      <div className="dq-modal dq-modal--sm dq-auth" onClick={(e) => e.stopPropagation()}>
        <div className="dq-modal-head">
          <div>
            <h2 id="auth-modal-title" className="dq-h2">
              {copy.title}
            </h2>
            <p className="dq-auth-lead">{copy.lead}</p>
          </div>
          <button type="button" className="dq-icon-btn" onClick={onClose} aria-label="Fechar janela de conta">
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        {!isFirebaseConfigured ? (
          <div className="dq-sandbox-notice">
            <CloudOff size={22} aria-hidden="true" />
            <p>
              Contas estão desligadas neste ambiente. Seu progresso, XP e a evolução do fox continuam salvos neste navegador.
            </p>
            <button type="button" className="dq-btn dq-btn-primary" onClick={onClose}>
              Continuar sem conta
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="dq-auth-form">
            {mode !== 'reset' && (
              <div className="dq-auth-tabs" role="tablist" aria-label="Tipo de acesso">
                <button
                  type="button"
                  role="tab"
                  aria-selected={mode === 'login'}
                  className={`dq-auth-tab ${mode === 'login' ? 'is-active' : ''}`}
                  onClick={() => switchMode('login')}
                >
                  Entrar
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={mode === 'signup'}
                  className={`dq-auth-tab ${mode === 'signup' ? 'is-active' : ''}`}
                  onClick={() => switchMode('signup')}
                >
                  Criar conta
                </button>
              </div>
            )}

            <label className="dq-field">
              <span>E-mail</span>
              <input
                ref={emailRef}
                type="email"
                inputMode="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="dq-input"
                maxLength={254}
                required
              />
            </label>

            {mode !== 'reset' && (
              <label className="dq-field">
                <span>Senha</span>
                <span className="dq-password">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="dq-input"
                    minLength={mode === 'signup' ? 8 : undefined}
                    maxLength={128}
                    required
                    aria-describedby={mode === 'signup' ? 'auth-password-hint' : undefined}
                  />
                  <button
                    type="button"
                    className="dq-password-toggle"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? 'Esconder senha' : 'Mostrar senha'}
                    aria-pressed={showPassword}
                  >
                    {showPassword ? <EyeOff size={18} aria-hidden="true" /> : <Eye size={18} aria-hidden="true" />}
                  </button>
                </span>
                {mode === 'signup' && (
                  <span id="auth-password-hint" className="dq-auth-hint">
                    Mínimo de 8 caracteres.
                  </span>
                )}
              </label>
            )}

            {error && (
              <p className="dq-auth-msg is-error" role="alert">
                {error}
              </p>
            )}
            {notice && (
              <p className="dq-auth-msg is-ok" role="status">
                <MailCheck size={16} aria-hidden="true" />
                <span>{notice}</span>
              </p>
            )}

            <button type="submit" className="dq-btn dq-btn-primary" disabled={busy} aria-busy={busy}>
              {busy ? 'Um instante…' : copy.submit}
            </button>

            <div className="dq-auth-foot">
              {mode === 'login' && (
                <button type="button" className="dq-link-btn" onClick={() => switchMode('reset')}>
                  Esqueci minha senha
                </button>
              )}
              {mode === 'reset' && (
                <button type="button" className="dq-link-btn" onClick={() => switchMode('login')}>
                  Voltar para entrar
                </button>
              )}
              <span className="dq-auth-safe">
                <ShieldCheck size={14} aria-hidden="true" />
                Sem spam. Você pode baixar ou apagar seus dados quando quiser.
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
