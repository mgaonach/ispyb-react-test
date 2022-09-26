import config from 'config/config';
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

  static url<T extends typeof Resource>(this: T, params: any): string {
    return `${config.baseUrl}/${super.url(params)}`;
  }

  static listUrl<T extends typeof Resource>(this: T, params: any): string {
    return `${config.baseUrl}/${super.listUrl(params)}`;
  }
}
