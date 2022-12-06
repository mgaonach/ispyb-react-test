/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Hour = number[];
export type Average = number[];

export interface Hourly {
  hour: Hour;
  average: Average;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withHourly<TBase extends Constructor>(Base: TBase) {
  return class WithHourly extends Base {
    hour: Hour;
    average: Average;
  }
}