/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Name = string;
export type Proposalid = number;
export type Name1 = string;

export interface ContainerDewar {
  code: Name;
  Shipping: DewarShipping;
}
export interface DewarShipping {
  proposalId: Proposalid;
  shippingName: Name1;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withContainerDewar<TBase extends Constructor>(Base: TBase) {
  return class WithContainerDewar extends Base {
    code: Name;
    Shipping: DewarShipping;
  }
}
export function withDewarShipping<TBase extends Constructor>(Base: TBase) {
  return class WithDewarShipping extends Base {
    proposalId: Proposalid;
    shippingName: Name1;
  }
}