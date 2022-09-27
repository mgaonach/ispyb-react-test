import { SingletonResource } from 'api/resources/Singleton';
import { withAuthConfig } from 'models/AuthConfig.d';

class _AuthConfigResource extends SingletonResource {
  static urlRoot = 'auth/config';
}

export const AuthConfigResource = withAuthConfig(_AuthConfigResource);
