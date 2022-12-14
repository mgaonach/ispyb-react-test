/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Ssxhitsid = number;
export type Datacollectionid = number;
export type Nbhits = number;
export type Nbindexed = number;
export type Laticetype = string;
export type Estimatedresolution = number;

export interface SSXHitsResponse {
  ssxHitsId: Ssxhitsid;
  dataCollectionId: Datacollectionid;
  nbHits: Nbhits;
  nbIndexed: Nbindexed;
  laticeType?: Laticetype;
  estimatedResolution?: Estimatedresolution;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withSSXHitsResponse<TBase extends Constructor>(Base: TBase) {
  return class WithSSXHitsResponse extends Base {
    ssxHitsId: Ssxhitsid;
    dataCollectionId: Datacollectionid;
    nbHits: Nbhits;
    nbIndexed: Nbindexed;
    laticeType?: Laticetype;
    estimatedResolution?: Estimatedresolution;
  }
}
