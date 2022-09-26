import PaginatedResource from 'api/resources/Paginated';
import { withSample } from 'models/Sample.d';

export class _SampleResource extends PaginatedResource {
  readonly blSampleId: number;

  pk() {
    return this.blSampleId?.toString();
  }
  static urlRoot = 'samples';
}

export const SampleResource = withSample(_SampleResource);
