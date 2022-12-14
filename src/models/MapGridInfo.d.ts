/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Gridinfoid = number;
export type StepsX = number;
export type StepsY = number;
export type Snaked = boolean;
export type Orientation = string;

export interface MapGridInfo {
  gridInfoId: Gridinfoid;
  steps_x: StepsX;
  steps_y: StepsY;
  snaked: Snaked;
  orientation: Orientation;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withMapGridInfo<TBase extends Constructor>(Base: TBase) {
  return class WithMapGridInfo extends Base {
    gridInfoId: Gridinfoid;
    steps_x: StepsX;
    steps_y: StepsY;
    snaked: Snaked;
    orientation: Orientation;
  }
}
