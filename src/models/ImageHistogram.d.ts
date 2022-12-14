/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Values = number[];
export type Bins = number[];
export type Shape = unknown[];
export type Max = number;

export interface ImageHistogram {
  values: Values;
  bins: Bins;
  shape: Shape;
  max: Max;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withImageHistogram<TBase extends Constructor>(Base: TBase) {
  return class WithImageHistogram extends Base {
    values: Values;
    bins: Bins;
    shape: Shape;
    max: Max;
  }
}
