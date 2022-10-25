import { Resource } from '@rest-hooks/rest';

export abstract class SiteResource extends Resource {
  static baseUrl: string;

  static url<T extends typeof Resource>(this: T, params: any): string {
    return `${SiteResource.baseUrl}/${super.url(params)}`;
  }

  static listUrl<T extends typeof Resource>(this: T, params: any): string {
    return `${SiteResource.baseUrl}/${super.listUrl(params)}`;
  }

  static get key(): string {
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      if (this.urlRoot === undefined) {
        throw new Error(`urlRoot is not defined for Resource "${this.name}"

  Resources require a 'static urlRoot' or 'static get key()' defined.
  (See https://resthooks.io/docs/api/resource#static-urlroot-string)
`);
      }
    }
    return `${SiteResource.baseUrl}::${this.urlRoot}`;
  }
}
