/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Name = string;
/**
 * A short name
 */
export type Acronym = string;
export type Proposalid = number;
/**
 * Sequence or chemical composition
 */
export type SequenceSMILES = string;
export type Density = number;
export type Mass = number;
export type Containmentlevel = string;
export type Hazardgroup = string;
export type Safetylevel = string;
export type Componenttypeid = number;
export type Name1 = string;
export type Proteinid = number;
/**
 * Number of attached pdbs
 */
export type Pdbs = number;
/**
 * Number of child crystals
 */
export type Crystals = number;
/**
 * Number of child samples
 */
export type Samples = number;

export interface Protein {
  name: Name;
  acronym: Acronym;
  proposalId: Proposalid;
  sequence?: SequenceSMILES;
  density?: Density;
  molecularMass?: Mass;
  containmentLevel?: Containmentlevel;
  hazardGroup?: Hazardgroup;
  safetyLevel?: Safetylevel;
  ComponentType?: ComponentType;
  proteinId: Proteinid;
  _metadata?: ProteinMetaData;
}
export interface ComponentType {
  componentTypeId: Componenttypeid;
  name: Name1;
}
export interface ProteinMetaData {
  pdbs?: Pdbs;
  crystals?: Crystals;
  samples?: Samples;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withProtein<TBase extends Constructor>(Base: TBase) {
  return class WithProtein extends Base {
    name: Name;
    acronym: Acronym;
    proposalId: Proposalid;
    sequence?: SequenceSMILES;
    density?: Density;
    molecularMass?: Mass;
    containmentLevel?: Containmentlevel;
    hazardGroup?: Hazardgroup;
    safetyLevel?: Safetylevel;
    ComponentType?: ComponentType;
    proteinId: Proteinid;
    _metadata?: ProteinMetaData;
  };
}
export function withComponentType<TBase extends Constructor>(Base: TBase) {
  return class WithComponentType extends Base {
    componentTypeId: Componenttypeid;
    name: Name1;
  };
}
export function withProteinMetaData<TBase extends Constructor>(Base: TBase) {
  return class WithProteinMetaData extends Base {
    pdbs?: Pdbs;
    crystals?: Crystals;
    samples?: Samples;
  };
}
