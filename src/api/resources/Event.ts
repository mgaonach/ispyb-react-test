import { EndpointExtraOptions } from '@rest-hooks/endpoint';
import PaginatedResource from 'api/resources/Paginated';
import { withEvent } from 'models/Event.d';

export class _EventResource extends PaginatedResource {
  readonly id: number
  readonly type: string

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

export const EventResource = withEvent(_EventResource)
