import { AuthenticatedSingletonResource } from '../Singleton';
import { withTimes } from 'models/Times.d';

class _TimesResource extends AuthenticatedSingletonResource {
  static urlRoot = 'stats/times';
}

export const TimesResource = withTimes(_TimesResource);
