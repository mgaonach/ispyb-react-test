import { EndpointExtraOptions } from '@rest-hooks/endpoint';
import PaginatedResource from "api/resources/Paginated";

export class EventResource extends PaginatedResource {
  readonly id: number | undefined = undefined
  readonly type: string | undefined = undefined

  pk() {
    return `${this.id}-${this.type}`;
  }
  static urlRoot = 'http://localhost:8000/events/';

  static getEndpointExtra(): EndpointExtraOptions {
    return {
      pollFrequency: 5000,
    };
  }
}
