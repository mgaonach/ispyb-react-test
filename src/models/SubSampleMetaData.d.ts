/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Number of data collections
 */
export type Datacollections = number;
/**
 * Types of data collections
 */
export type Types = string[];

export interface SubSampleMetaData {
  datacollections: Datacollections;
  types?: Types;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withSubSampleMetaData<TBase extends Constructor>(Base: TBase) {
  return class WithSubSampleMetaData extends Base {
    datacollections: Datacollections;
    types?: Types;
  };
}