import { AuthenticatedResource } from 'api/resources/Base/Authenticated';
import { SiteResource } from 'api/resources/Base/Site';
import { SiteConfig, SITES } from 'config/sites';
import React from 'react';

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

/**
 * Get the authentication state
 * @returns
 */
export function useAuth(): AuthData {
  const [tokenState, setTokenState] = React.useState('');
  const [siteState, setSiteState] = React.useState<SiteConfig>(SITES[0]);
  const [siteInitialized, setSiteInitialized] = React.useState(false);

  React.useEffect(() => {
    const tokenSession = window.sessionStorage.getItem('token');
    if (tokenSession != null) {
      setTokenState(tokenSession);
    }
    const siteSession = window.sessionStorage.getItem('site');
    if (siteSession != null) {
      SITES.forEach((siteI) => {
        if (siteI.name === siteSession) {
          setSite(siteI);
        }
      });
    } else {
      setSite(SITES[0]);
    }
  }, []);

  const setToken = (token: string) => {
    window.sessionStorage.setItem('token', token);
    AuthenticatedResource.accessToken = token;
    setTokenState(token);
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
    setSiteState(newSite);
    setSiteInitialized(true);
  };

  // let site = SITES[0];
  // SITES.forEach((siteI) => {
  //   if (siteI.name === siteName) {
  //     site = siteI;
  //   }
  // });

  return {
    token: tokenState,
    site: siteState,
    siteInitialized,
    isAuthenticated: !!tokenState,
    setToken,
    restoreToken,
    clearToken,
    setSite,
  };
}
