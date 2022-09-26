import { AuthenticatedResource } from 'api/resources/Authenticated';

interface AuthData {
  token: string | null;
  isAuthenticated: boolean;
  setToken: (token: string) => void;
  restoreToken: () => void;
  clearToken: () => void;
}

/**
 * Get the authentication state
 * @returns
 */
export function useAuth(): AuthData {
  const token = window.sessionStorage.getItem('token') || '';

  const setToken = (token: string) => {
    window.sessionStorage.setItem('token', token);
    AuthenticatedResource.accessToken = token;
  };

  const restoreToken = () => {
    AuthenticatedResource.accessToken = token;
  };

  const clearToken = () => {
    setToken('');
  };

  return {
    token,
    isAuthenticated: !!token,
    setToken,
    restoreToken,
    clearToken,
  };
}
