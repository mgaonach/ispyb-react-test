import { Resource } from '@rest-hooks/rest';
import { JSONSchema7 } from "json-schema";

// https://github.com/rjsf-team/react-jsonschema-form/issues/2006
// https://levelup.gitconnected.com/using-crud-operations-with-react-swr-for-mutating-rest-api-cache-3e0d01774aed

export class OpenAPIResource extends Resource {
  components: JSONSchema7 = {}
     pk() {
        return "1";
    }

  static url<T extends typeof Resource>(
    this: T
  ): string {
    return 'http://localhost:8000/openapi.json';
  }

  static urlRoot = 'http://localhost:8000/openapi.json';
}
