/** Firebase Auth error codes → friendly PT-BR copy. */
const MESSAGES = {
  'auth/invalid-credential': 'E-mail ou senha incorretos.',
  'auth/wrong-password': 'E-mail ou senha incorretos.',
  'auth/user-not-found': 'E-mail ou senha incorretos.',
  'auth/invalid-email': 'Esse e-mail não parece válido.',
  'auth/email-already-in-use': 'Já existe uma conta com esse e-mail. Tente entrar.',
  'auth/weak-password': 'Senha fraca: use pelo menos 8 caracteres.',
  'auth/password-does-not-meet-requirements': 'Senha fraca: use pelo menos 8 caracteres.',
  'auth/too-many-requests': 'Muitas tentativas. Espere um pouco e tente de novo.',
  'auth/network-request-failed': 'Sem conexão. Verifique sua internet.',
  'auth/user-disabled': 'Essa conta foi desativada.',
  'auth/requires-recent-login': 'Por segurança, confirme sua senha de novo.',
  'auth/missing-password': 'Digite sua senha.',
  'auth/missing-email': 'Digite seu e-mail.',
};

export function authErrorMessage(err) {
  return MESSAGES[err?.code] ?? err?.message ?? 'Não foi possível autenticar agora.';
}
