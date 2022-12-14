/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Crystalid = number;
export type Diffractionplanid = number;
export type Proteinid = number;
export type Crystaluuid = string;
export type Name = string;
export type Spacegroup = string;
export type Morphology = string;
export type Color = string;
export type SizeX = number;
export type SizeY = number;
export type SizeZ = number;
export type CellA = number;
export type CellB = number;
export type CellC = number;
export type CellAlpha = number;
export type CellBeta = number;
export type CellGamma = number;
export type Comments = string;
export type Pdbfilename = string;
export type Pdbfilepath = string;
export type Recordtimestamp = string;
export type Abundance = number;
export type Packingfraction = number;
export type Proteinid1 = number;
export type Proposalid = number;
export type Name1 = string;
export type Acronym = string;
export type Description = string;
export type Hazardgroup = number;
export type Containmentlevel = number;
export type Safetylevel = string;
export type Molecularmass = number;
export type Proteintype = string;
export type Sequence = string;
export type Personid = number;
export type Bltimestamp = string;
export type Iscreatedbysamplesheet = number;
export type Externalid = string;
export type Componenttypeid = number;
export type Modid = string;
export type Concentrationtypeid = number;
export type Crystalcompositionid = number;
export type Componentid = number;
export type Crystalid1 = number;
export type Concentrationtypeid1 = number;
export type Abundance1 = number;
export type Ratio = number;
export type Ph = number;
export type Componentid1 = number;
export type Componenttypeid1 = number;
export type Proposalid1 = number;
export type Name2 = string;
export type Composition = string;
export type Concentration = number;
export type Componenttypeid2 = number;
export type Name3 = string;
export type CrystalCompositions = CrystalCompositionResponse[];

export interface CrystalResponse {
  crystalId: Crystalid;
  diffractionPlanId?: Diffractionplanid;
  proteinId: Proteinid;
  crystalUUID?: Crystaluuid;
  name?: Name;
  spaceGroup?: Spacegroup;
  morphology?: Morphology;
  color?: Color;
  size_X?: SizeX;
  size_Y?: SizeY;
  size_Z?: SizeZ;
  cell_a?: CellA;
  cell_b?: CellB;
  cell_c?: CellC;
  cell_alpha?: CellAlpha;
  cell_beta?: CellBeta;
  cell_gamma?: CellGamma;
  comments?: Comments;
  pdbFileName?: Pdbfilename;
  pdbFilePath?: Pdbfilepath;
  recordTimeStamp: Recordtimestamp;
  abundance?: Abundance;
  packingFraction?: Packingfraction;
  Protein: Protein;
  crystal_compositions: CrystalCompositions;
}
export interface Protein {
  proteinId: Proteinid1;
  proposalId: Proposalid;
  name?: Name1;
  acronym?: Acronym;
  description?: Description;
  hazardGroup: Hazardgroup;
  containmentLevel: Containmentlevel;
  safetyLevel?: Safetylevel;
  molecularMass?: Molecularmass;
  proteinType?: Proteintype;
  sequence?: Sequence;
  personId?: Personid;
  bltimeStamp: Bltimestamp;
  isCreatedBySampleSheet?: Iscreatedbysamplesheet;
  externalId?: Externalid;
  componentTypeId?: Componenttypeid;
  modId?: Modid;
  concentrationTypeId?: Concentrationtypeid;
}
export interface CrystalCompositionResponse {
  crystalCompositionId: Crystalcompositionid;
  componentId: Componentid;
  crystalId: Crystalid1;
  concentrationTypeId?: Concentrationtypeid1;
  abundance?: Abundance1;
  ratio?: Ratio;
  ph?: Ph;
  Component: ComponentResponse;
}
export interface ComponentResponse {
  componentId: Componentid1;
  componentTypeId: Componenttypeid1;
  proposalId?: Proposalid1;
  name: Name2;
  composition?: Composition;
  concentration?: Concentration;
  ComponentType: ComponentType;
}
export interface ComponentType {
  componentTypeId: Componenttypeid2;
  name: Name3;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withCrystalResponse<TBase extends Constructor>(Base: TBase) {
  return class WithCrystalResponse extends Base {
    crystalId: Crystalid;
    diffractionPlanId?: Diffractionplanid;
    proteinId: Proteinid;
    crystalUUID?: Crystaluuid;
    name?: Name;
    spaceGroup?: Spacegroup;
    morphology?: Morphology;
    color?: Color;
    size_X?: SizeX;
    size_Y?: SizeY;
    size_Z?: SizeZ;
    cell_a?: CellA;
    cell_b?: CellB;
    cell_c?: CellC;
    cell_alpha?: CellAlpha;
    cell_beta?: CellBeta;
    cell_gamma?: CellGamma;
    comments?: Comments;
    pdbFileName?: Pdbfilename;
    pdbFilePath?: Pdbfilepath;
    recordTimeStamp: Recordtimestamp;
    abundance?: Abundance;
    packingFraction?: Packingfraction;
    Protein: Protein;
    crystal_compositions: CrystalCompositions;
  }
}
export function withProtein<TBase extends Constructor>(Base: TBase) {
  return class WithProtein extends Base {
    proteinId: Proteinid1;
    proposalId: Proposalid;
    name?: Name1;
    acronym?: Acronym;
    description?: Description;
    hazardGroup: Hazardgroup;
    containmentLevel: Containmentlevel;
    safetyLevel?: Safetylevel;
    molecularMass?: Molecularmass;
    proteinType?: Proteintype;
    sequence?: Sequence;
    personId?: Personid;
    bltimeStamp: Bltimestamp;
    isCreatedBySampleSheet?: Iscreatedbysamplesheet;
    externalId?: Externalid;
    componentTypeId?: Componenttypeid;
    modId?: Modid;
    concentrationTypeId?: Concentrationtypeid;
  }
}
export function withCrystalCompositionResponse<TBase extends Constructor>(Base: TBase) {
  return class WithCrystalCompositionResponse extends Base {
    crystalCompositionId: Crystalcompositionid;
    componentId: Componentid;
    crystalId: Crystalid1;
    concentrationTypeId?: Concentrationtypeid1;
    abundance?: Abundance1;
    ratio?: Ratio;
    ph?: Ph;
    Component: ComponentResponse;
  }
}
export function withComponentResponse<TBase extends Constructor>(Base: TBase) {
  return class WithComponentResponse extends Base {
    componentId: Componentid1;
    componentTypeId: Componenttypeid1;
    proposalId?: Proposalid1;
    name: Name2;
    composition?: Composition;
    concentration?: Concentration;
    ComponentType: ComponentType;
  }
}
export function withComponentType<TBase extends Constructor>(Base: TBase) {
  return class WithComponentType extends Base {
    componentTypeId: Componenttypeid2;
    name: Name3;
  }
}
