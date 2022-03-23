import config from 'config/config';
import { Resource } from '@rest-hooks/rest';
import { AuthenticatedResource } from './Authenticated';

export default abstract class PaginatedResource extends AuthenticatedResource {
  static list<T extends typeof Resource>(this: T) {
    return super.list().extend({
      schema: { results: [this], total: 0, limit: 0, skip: 0 },
    });
  }

  static url<T extends typeof Resource>(this: T, params: any): string {
    return `${config.baseUrl}/${super.url(params)}`;
  }

  static listUrl<T extends typeof Resource>(this: T, params: any): string {
    return `${config.baseUrl}/${super.listUrl(params)}`;
  }
}
