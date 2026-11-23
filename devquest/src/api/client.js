import { auth } from '../firebase/config.js';

const API_BASE = (import.meta.env.VITE_API_BASE ?? '').replace(/\/$/, '');

export class ApiError extends Error {
  constructor(status, code, message, details) {
    super(message);
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

/** Authenticated JSON call to the DevQuest API. Retries once with a fresh token on 401. */
export async function apiFetch(path, { method = 'GET', body, retry = true } = {}) {
  const user = auth?.currentUser;
  if (!user) throw new ApiError(401, 'auth_required', 'Faça login para continuar.');
  const token = await user.getIdToken(!retry);
  let response;
  try {
    response = await fetch(`${API_BASE}/api/${path}`, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        ...(body !== undefined ? { 'Content-Type': 'application/json' } : {}),
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new ApiError(0, 'network', 'Sem conexão com o servidor. Seu progresso será reenviado quando voltar.');
  }
  const data = await response.json().catch(() => ({}));
  if (response.status === 401 && retry && data?.error?.code === 'invalid_token') {
    return apiFetch(path, { method, body, retry: false });
  }
  if (!response.ok) {
    throw new ApiError(
      response.status,
      data?.error?.code ?? 'unknown',
      data?.error?.message ?? 'Algo deu errado no servidor.',
      data?.error?.details
    );
  }
  return data;
}

export const api = {
  session: (payload) => apiFetch('session', { method: 'POST', body: payload }),
  me: () => apiFetch('me'),
  updateProfile: (patch) => apiFetch('me', { method: 'PATCH', body: patch }),
  deleteAccount: () => apiFetch('me', { method: 'DELETE' }),
  progress: (action) => apiFetch('progress', { method: 'POST', body: action }),
  exportData: () => apiFetch('export'),
};
