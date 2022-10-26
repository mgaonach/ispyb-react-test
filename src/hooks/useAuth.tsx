import { AuthenticatedResource } from 'api/resources/Base/Authenticated';
import { SiteResource } from 'api/resources/Base/Site';
import { SiteConfig, SITES } from 'config/sites';
import React, { createContext, useContext } from 'react';
import { useController } from 'rest-hooks';

interface AuthData {
  token: string;
  site: SiteConfig;
  siteInitialized: boolean;
  isAuthenticated: boolean;
  setToken: (token: string) => void;
  restoreToken: () => void;
  clearToken: () => void;
  setSite: (site: SiteConfig) => void;
}

const AuthContext = createContext<AuthData>({
  token: '',
  site: SITES[0],
  siteInitialized: false,
  isAuthenticated: false,
  setToken: (token: string) => undefined,
  restoreToken: () => undefined,
  clearToken: () => undefined,
  setSite: (site: SiteConfig) => undefined,
});

export function AuthProvider({ children }: { children?: React.ReactNode }) {
  const [tokenState, setTokenState] = React.useState('');
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [siteState, setSiteState] = React.useState<SiteConfig>(SITES[0]);
  const [siteInitialized, setSiteInitialized] = React.useState(false);
  const { resetEntireStore } = useController();

  React.useEffect(() => {
    const tokenSession = window.sessionStorage.getItem('token');
    if (tokenSession != null) {
      setToken(tokenSession);
    }
    const siteSession = window.sessionStorage.getItem('site');
    if (siteSession != null) {
      let found = false;
      SITES.forEach((siteI) => {
        if (siteI.name === siteSession) {
          setSite(siteI);
          found = true;
        }
      });
      if (!found) {
        setSite(SITES[0]);
      }
    } else {
      setSite(SITES[0]);
    }
  }, []);

  const setToken = (token: string) => {
    window.sessionStorage.setItem('token', token);
    AuthenticatedResource.accessToken = token;
    resetEntireStore();
    setTokenState(token);
    setIsAuthenticated(token.length > 0);
  };

  const restoreToken = () => {
    AuthenticatedResource.accessToken = tokenState;
  };

  const clearToken = () => {
    setToken('');
  };

  const setSite = (newSite: SiteConfig) => {
    window.sessionStorage.setItem('site', newSite.name);
    SiteResource.baseUrl = `${newSite.host}${newSite.apiPrefix}`;
    resetEntireStore();
    setSiteState(newSite);
    setSiteInitialized(true);
  };

  return (
    <AuthContext.Provider
      value={{
        token: tokenState,
        isAuthenticated,
        site: siteState,
        siteInitialized,
        setToken,
        restoreToken,
        clearToken,
        setSite,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/**
 * Get the authentication state
 * @returns
 */
export function useAuth(): AuthData {
  return useContext(AuthContext);
}
