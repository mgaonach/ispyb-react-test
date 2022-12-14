/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Componenttypeid = number;
export type Name = string;

export interface ComponentType {
  componentTypeId: Componenttypeid;
  name: Name;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withComponentType<TBase extends Constructor>(Base: TBase) {
  return class WithComponentType extends Base {
    componentTypeId: Componenttypeid;
    name: Name;
  }
}
