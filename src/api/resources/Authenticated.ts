import { Resource } from '@rest-hooks/rest';

export abstract class AuthenticatedResource extends Resource {
  static accessToken: string;
  static getFetchInit = (init: RequestInit): RequestInit => ({
    ...init,
    headers: {
      ...init.headers,
      Authorization: `Bearer ${this.accessToken}`,
    },
  });
}
