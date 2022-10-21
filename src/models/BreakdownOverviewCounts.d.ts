/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Datacollections = number;
export type Failed = number;
export type Robot = number;
export type Edge = number;
export type Xrf = number;

export interface BreakdownOverviewCounts {
  datacollections: Datacollections;
  failed: Failed;
  datacollectionTypes: Datacollectiontypes;
  robot: Robot;
  edge: Edge;
  xrf: Xrf;
}
export interface Datacollectiontypes {
  [k: string]: number;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withBreakdownOverviewCounts<TBase extends Constructor>(
  Base: TBase
) {
  return class WithBreakdownOverviewCounts extends Base {
    datacollections: Datacollections;
    failed: Failed;
    datacollectionTypes: Datacollectiontypes;
    robot: Robot;
    edge: Edge;
    xrf: Xrf;
  };
}
export function withDatacollectiontypes<TBase extends Constructor>(
  Base: TBase
) {
  return class WithDatacollectiontypes extends Base {
    [k: string]: number;
  };
}
