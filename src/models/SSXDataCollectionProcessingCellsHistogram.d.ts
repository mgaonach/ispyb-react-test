/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type X = number[];
export type Y = number[];
export type Median = number;
export type Datacollectionids = number[];

export interface SSXDataCollectionProcessingCellsHistogram {
  a?: Histogram;
  b?: Histogram;
  c?: Histogram;
  alpha?: Histogram;
  beta?: Histogram;
  gamma?: Histogram;
  dataCollectionIds: Datacollectionids;
}
export interface Histogram {
  x: X;
  y: Y;
  median: Median;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withSSXDataCollectionProcessingCellsHistogram<TBase extends Constructor>(Base: TBase) {
  return class WithSSXDataCollectionProcessingCellsHistogram extends Base {
    a?: Histogram;
    b?: Histogram;
    c?: Histogram;
    alpha?: Histogram;
    beta?: Histogram;
    gamma?: Histogram;
    dataCollectionIds: Datacollectionids;
  }
}
export function withHistogram<TBase extends Constructor>(Base: TBase) {
  return class WithHistogram extends Base {
    x: X;
    y: Y;
    median: Median;
  }
}
