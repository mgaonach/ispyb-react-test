/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Spacegroup = string;
export type RefinedcellA = number;
export type RefinedcellB = number;
export type RefinedcellC = number;
export type RefinedcellAlpha = number;
export type RefinedcellBeta = number;
export type RefinedcellGamma = number;

export interface AutoProc {
  spaceGroup: Spacegroup;
  refinedCell_a: RefinedcellA;
  refinedCell_b: RefinedcellB;
  refinedCell_c: RefinedcellC;
  refinedCell_alpha: RefinedcellAlpha;
  refinedCell_beta: RefinedcellBeta;
  refinedCell_gamma: RefinedcellGamma;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withAutoProc<TBase extends Constructor>(Base: TBase) {
  return class WithAutoProc extends Base {
    spaceGroup: Spacegroup;
    refinedCell_a: RefinedcellA;
    refinedCell_b: RefinedcellB;
    refinedCell_c: RefinedcellC;
    refinedCell_alpha: RefinedcellAlpha;
    refinedCell_beta: RefinedcellBeta;
    refinedCell_gamma: RefinedcellGamma;
  }
}
