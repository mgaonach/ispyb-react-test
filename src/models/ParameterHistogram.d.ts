/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Beamlinename = string;
export type Bin = number[];
export type Frequency = number[];

export interface ParameterHistogram {
  beamLineName: Beamlinename;
  bin: Bin;
  frequency: Frequency;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withParameterHistogram<TBase extends Constructor>(Base: TBase) {
  return class WithParameterHistogram extends Base {
    beamLineName: Beamlinename;
    bin: Bin;
    frequency: Frequency;
  }
}
