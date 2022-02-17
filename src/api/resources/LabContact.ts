import { Resource } from '@rest-hooks/rest';

// https://github.com/rjsf-team/react-jsonschema-form/issues/2006
// https://levelup.gitconnected.com/using-crud-operations-with-react-swr-for-mutating-rest-api-cache-3e0d01774aed

export class LabContactResource extends Resource {
  readonly labContactId: number | undefined = undefined;

  pk() {
    return this.labContactId?.toString();
  }
  static urlRoot = 'http://localhost:8000/labcontacts';

  static list<T extends typeof Resource>(this: T) {
    return super.list().extend({
      schema: { results: [this], total: 0 },
    });
  }
}
