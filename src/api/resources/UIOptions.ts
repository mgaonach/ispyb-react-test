import { AuthenticatedSingletonResource } from 'api/resources/Singleton';
import { withUIOptions } from 'models/UIOptions.d';

class _UIOptionsResource extends AuthenticatedSingletonResource {
  static urlRoot = 'options/ui';
}

export const UIOptionsResource = withUIOptions(_UIOptionsResource);
