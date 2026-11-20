import React, { useState, useEffect } from 'react';
import { X, CloudOff } from 'lucide-react';

export default function AuthModal({
  onClose,
  onLogin,
  onSignUp,
  isFirebaseConfigured,
}) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (isLogin) {
        await onLogin(email, password);
      } else {
        await onSignUp(email, password);
      }
    } catch (err) {
      setError(err?.message ?? 'Não foi possível autenticar agora.');
    }
  };

  return (
    <div
      className="dq-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
      onClick={onClose}
    >
      <div className="dq-modal dq-modal--sm" onClick={(e) => e.stopPropagation()}>
        <div className="dq-modal-head">
          <div>
            <span className="dq-badge dq-badge-live">Sincronização na Nuvem</span>
            <h2 id="auth-modal-title" className="dq-h2">
              {isLogin ? 'Entrar no Reino' : 'Criar Conta'}
            </h2>
          </div>
          <button
            type="button"
            className="dq-icon-btn"
            onClick={onClose}
            aria-label="Fechar janela de conta"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        {!isFirebaseConfigured ? (
          <div className="dq-sandbox-notice">
            <CloudOff size={22} aria-hidden="true" />
            <p>
              Você está rodando no <strong>Modo Sandbox Local</strong> (sem chaves do Firebase no <code>.env</code>). Todo seu progresso, XP e evolução do mascote já ficam salvos automaticamente no navegador!
            </p>
            <button type="button" className="dq-btn dq-btn-primary" onClick={onClose}>
              Continuar no Sandbox Local
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="dq-auth-form">
            <label className="dq-field">
              <span>E-mail</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="dq-input"
                required
              />
            </label>

            <label className="dq-field">
              <span>Senha</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="dq-input"
                required
              />
            </label>

            {error && (
              <p className="dq-text-danger" role="alert">
                {error}
              </p>
            )}

            <button type="submit" className="dq-btn dq-btn-primary">
              {isLogin ? 'Entrar e Sincronizar' : 'Forjar Conta'}
            </button>

            <button
              type="button"
              className="dq-btn dq-btn-ghost"
              onClick={() => setIsLogin((prev) => !prev)}
            >
              {isLogin ? 'Ainda não tem conta? Crie uma aqui' : 'Já tem conta? Entrar'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
