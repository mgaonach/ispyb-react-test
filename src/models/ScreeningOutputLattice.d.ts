/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type UnitcellA = number;
export type UnitcellB = number;
export type UnitcellC = number;
export type UnitcellAlpha = number;
export type UnitcellBeta = number;
export type UnitcellGamma = number;
export type Spacegroup = string;
export type Pointgroup = string;

export interface ScreeningOutputLattice {
  unitCell_a: UnitcellA;
  unitCell_b: UnitcellB;
  unitCell_c: UnitcellC;
  unitCell_alpha: UnitcellAlpha;
  unitCell_beta: UnitcellBeta;
  unitCell_gamma: UnitcellGamma;
  spaceGroup?: Spacegroup;
  pointGroup?: Pointgroup;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withScreeningOutputLattice<TBase extends Constructor>(
  Base: TBase
) {
  return class WithScreeningOutputLattice extends Base {
    unitCell_a: UnitcellA;
    unitCell_b: UnitcellB;
    unitCell_c: UnitcellC;
    unitCell_alpha: UnitcellAlpha;
    unitCell_beta: UnitcellBeta;
    unitCell_gamma: UnitcellGamma;
    spaceGroup?: Spacegroup;
    pointGroup?: Pointgroup;
  };
}
