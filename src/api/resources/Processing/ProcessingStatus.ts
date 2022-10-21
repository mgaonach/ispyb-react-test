import { AuthenticatedSingletonResource } from '../Singleton';
import { withProcessingStatusesList } from 'models/ProcessingStatusesList.d';

class _ProcessingStatus extends AuthenticatedSingletonResource {
  static getEndpointExtra() {
    return {
      ...super.getEndpointExtra(),
      pollFrequency: 5000,
    };
  }

  static urlRoot = 'processings/status';
}

export const ProcessingStatus = withProcessingStatusesList(_ProcessingStatus);
