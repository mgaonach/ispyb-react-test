/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Shippingname = string;

export interface Shipping {
  shippingName: Shippingname;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withShipping<TBase extends Constructor>(Base: TBase) {
  return class WithShipping extends Base {
    shippingName: Shippingname;
  };
}