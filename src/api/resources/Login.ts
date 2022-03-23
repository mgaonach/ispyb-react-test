import config from 'config/config';
import { Resource } from '@rest-hooks/rest';

export class LoginResource extends Resource {
  pk() {
    return '1';
  }

  static urlRoot = `${config.baseUrl}/auth/login`;
}
