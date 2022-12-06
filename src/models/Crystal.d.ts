/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type CellA = null | number;
export type CellB = null | number;
export type CellC = null | number;
export type CellAlpha = null | number;
export type CellBeta = null | number;
export type CellGamma = null | number;
export type Name = string;
export type Acronym = string;
export type Proteinid = number;
export type Crystalid = number;

export interface Crystal {
  cell_a?: CellA;
  cell_b?: CellB;
  cell_c?: CellC;
  cell_alpha?: CellAlpha;
  cell_beta?: CellBeta;
  cell_gamma?: CellGamma;
  Protein: Protein;
  crystalId: Crystalid;
}
export interface Protein {
  name: Name;
  acronym: Acronym;
  proteinId: Proteinid;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withCrystal<TBase extends Constructor>(Base: TBase) {
  return class WithCrystal extends Base {
    cell_a?: CellA;
    cell_b?: CellB;
    cell_c?: CellC;
    cell_alpha?: CellAlpha;
    cell_beta?: CellBeta;
    cell_gamma?: CellGamma;
    Protein: Protein;
    crystalId: Crystalid;
  }
}
export function withProtein<TBase extends Constructor>(Base: TBase) {
  return class WithProtein extends Base {
    name: Name;
    acronym: Acronym;
    proteinId: Proteinid;
  }
}