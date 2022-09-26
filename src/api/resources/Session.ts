import PaginatedResource from 'api/resources/Paginated';
import { withSession } from 'models/Session.d';

export class _SessionResource extends PaginatedResource {
  readonly sessionId: number;

  pk() {
    return this.sessionId?.toString();
  }
  static urlRoot = 'sessions';
}

export const SessionResource = withSession(_SessionResource);

export class _SessionGroupResource extends _SessionResource {
  static urlRoot = 'sessions/group';
}

export const SessionGroupResource = withSession(_SessionGroupResource);
