/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Shippingid = number;
export type Name = string;
export type Dewartype = string;

export interface DewarCreate {
  shippingId: Shippingid;
  code: Name;
  dewarType?: Dewartype;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withDewarCreate<TBase extends Constructor>(Base: TBase) {
  return class WithDewarCreate extends Base {
    shippingId: Shippingid;
    code: Name;
    dewarType?: Dewartype;
  }
}
