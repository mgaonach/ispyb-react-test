/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Name = string;
export type Acronym = string;
export type Description = string;
export type Hazardgroup = number;
export type Containmentlevel = number;
export type Safetylevel = string;
export type Molecularmass = number;
export type Proteintype = string;
export type Sequence = string;
export type Iscreatedbysamplesheet = number;
export type Externalid = number;
export type Componenttypeid = number;
export type Modid = string;
export type Concentrationtypeid = number;
export type Siteid = number;
export type Personuuid = string;
export type Familyname = string;
export type Givenname = string;
export type Title = string;
export type Emailaddress = string;
export type Phonenumber = string;
export type Login = string;
export type Passwd = string;
export type Faxnumber = string;
export type Externalid1 = number;
export type Cache = string;
/**
 * The Laboratory name
 */
export type LaboratoryName = string;
/**
 * The Laboratory Address
 */
export type Address = string;
/**
 * The Laboratory City
 */
export type City = string;
/**
 * The Laboratory Country
 */
export type Country = string;
/**
 * The Laboratory optional URL
 */
export type URL = null | string;
/**
 * External Id from the User Portal
 */
export type LaboratoryExtPk = null | number;

export interface UPProtein {
  name?: Name;
  acronym: Acronym;
  description?: Description;
  hazardGroup: Hazardgroup;
  containmentLevel: Containmentlevel;
  safetyLevel?: Safetylevel;
  molecularMass?: Molecularmass;
  proteinType?: Proteintype;
  sequence?: Sequence;
  isCreatedBySampleSheet?: Iscreatedbysamplesheet;
  externalId?: Externalid;
  componentTypeId?: Componenttypeid;
  modId?: Modid;
  concentrationTypeId?: Concentrationtypeid;
  person: PersonProposalLaboratory;
}
export interface PersonProposalLaboratory {
  siteId?: Siteid;
  personUUID?: Personuuid;
  familyName?: Familyname;
  givenName?: Givenname;
  title?: Title;
  emailAddress?: Emailaddress;
  phoneNumber?: Phonenumber;
  login?: Login;
  passwd?: Passwd;
  faxNumber?: Faxnumber;
  externalId?: Externalid1;
  cache?: Cache;
  laboratory?: LaboratoryCreate;
}
export interface LaboratoryCreate {
  name: LaboratoryName;
  address: Address;
  city: City;
  country: Country;
  url?: URL;
  laboratoryExtPk?: LaboratoryExtPk;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withUPProtein<TBase extends Constructor>(Base: TBase) {
  return class WithUPProtein extends Base {
    name?: Name;
    acronym: Acronym;
    description?: Description;
    hazardGroup: Hazardgroup;
    containmentLevel: Containmentlevel;
    safetyLevel?: Safetylevel;
    molecularMass?: Molecularmass;
    proteinType?: Proteintype;
    sequence?: Sequence;
    isCreatedBySampleSheet?: Iscreatedbysamplesheet;
    externalId?: Externalid;
    componentTypeId?: Componenttypeid;
    modId?: Modid;
    concentrationTypeId?: Concentrationtypeid;
    person: PersonProposalLaboratory;
  };
}
export function withPersonProposalLaboratory<TBase extends Constructor>(
  Base: TBase
) {
  return class WithPersonProposalLaboratory extends Base {
    siteId?: Siteid;
    personUUID?: Personuuid;
    familyName?: Familyname;
    givenName?: Givenname;
    title?: Title;
    emailAddress?: Emailaddress;
    phoneNumber?: Phonenumber;
    login?: Login;
    passwd?: Passwd;
    faxNumber?: Faxnumber;
    externalId?: Externalid1;
    cache?: Cache;
    laboratory?: LaboratoryCreate;
  };
}
export function withLaboratoryCreate<TBase extends Constructor>(Base: TBase) {
  return class WithLaboratoryCreate extends Base {
    name: LaboratoryName;
    address: Address;
    city: City;
    country: Country;
    url?: URL;
    laboratoryExtPk?: LaboratoryExtPk;
  };
}
