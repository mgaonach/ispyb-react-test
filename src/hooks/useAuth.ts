import { useState } from 'react';

interface AuthData {
  token: string | null;
  setToken: (token: string) => void;
}

export function useAuth(): AuthData {
  const setToken = (token: string) => {
    window.sessionStorage.setItem('token', token);
  };

  return {
    token: window.sessionStorage.getItem('token'),
    setToken,
  };
}
