import PaginatedResource from 'api/resources/Paginated';
import { AuthenticatedResource } from './Authenticated';

export class SampleResource extends PaginatedResource {
  readonly blSampleId: number;

  pk() {
    return this.blSampleId?.toString();
  }
  static urlRoot = 'samples';
}
