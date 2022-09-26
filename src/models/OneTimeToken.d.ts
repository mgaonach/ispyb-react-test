/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The url to sign
 */
export type Validity = string;
export type Token = string;

export interface OneTimeToken {
  validity: Validity;
  token?: Token;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withOneTimeToken<TBase extends Constructor>(Base: TBase) {
  return class WithOneTimeToken extends Base {
    validity: Validity;
    token?: Token;
  };
}
