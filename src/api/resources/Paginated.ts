import { Resource } from '@rest-hooks/rest';

export default abstract class PaginatedResource extends Resource {
  static list<T extends typeof Resource>(this: T) {
    return super.list().extend({
      schema: { results: [this], total: 0 },
    });
  }
}
