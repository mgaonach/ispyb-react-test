import PaginatedResource from "api/resources/Paginated";

export class SampleResource extends PaginatedResource {
  readonly blSampleId: number | undefined = undefined;

  pk() {
    return this.blSampleId?.toString();
  }
  static urlRoot = 'http://localhost:8000/samples';
}
