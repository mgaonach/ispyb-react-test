import { Resource } from '@rest-hooks/rest';
import { AuthenticatedResource } from './Authenticated';
import config from 'config/config';

export class SingletonResource extends Resource {
  pk() {
    return '1';
  }

  static url<T extends typeof Resource>(this: T): string {
    return `${config.baseUrl}/${this.urlRoot}`;
  }
}

export class AuthenticatedSingletonResource extends AuthenticatedResource {
  pk() {
    return '1';
  }

  static list<T extends typeof Resource>(this: T) {
    return super.list().extend({
      schema: this,
    });
  }

  static url<T extends typeof Resource>(this: T): string {
    return `${config.baseUrl}/${this.urlRoot}`;
  }
}
