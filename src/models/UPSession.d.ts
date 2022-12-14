/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Expsessionpk = number;
export type Beamlinesetupid = number;
export type Projectcode = string;
export type Startdate = string;
export type Enddate = string;
export type Beamlinename = string;
export type Scheduled = number;
export type Nbshifts = number;
export type Beamlineoperator = string;
export type VisitNumber = number;
export type Usedflag = number;
export type Sessiontitle = string;
export type Structuredeterminations = number;
export type Dewartransport = number;
export type Databackupfrance = number;
export type Databackupeurope = number;
export type Operatorsitenumber = string;
export type Lastupdate = string;
export type Protecteddata = string;
export type Externalid = number;
export type Nbreimbdewars = number;
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
export type Role =
  | "Local Contact"
  | "Local Contact 2"
  | "Staff"
  | "Team Leader"
  | "Co-Investigator"
  | "Principal Investigator"
  | "Alternate Contact";
export type Remote = number;
export type Persons = PersonSessionLaboratory[];

export interface UPSession {
  expSessionPk?: Expsessionpk;
  beamLineSetupId?: Beamlinesetupid;
  projectCode?: Projectcode;
  startDate?: Startdate;
  endDate?: Enddate;
  beamLineName?: Beamlinename;
  scheduled?: Scheduled;
  nbShifts?: Nbshifts;
  beamLineOperator?: Beamlineoperator;
  visit_number?: VisitNumber;
  usedFlag?: Usedflag;
  sessionTitle?: Sessiontitle;
  structureDeterminations?: Structuredeterminations;
  dewarTransport?: Dewartransport;
  databackupFrance?: Databackupfrance;
  databackupEurope?: Databackupeurope;
  operatorSiteNumber?: Operatorsitenumber;
  lastUpdate?: Lastupdate;
  protectedData?: Protecteddata;
  externalId?: Externalid;
  nbReimbDewars?: Nbreimbdewars;
  persons?: Persons;
}
export interface PersonSessionLaboratory {
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
  session_options?: PersonSessionOptions;
}
export interface LaboratoryCreate {
  name: LaboratoryName;
  address: Address;
  city: City;
  country: Country;
  url?: URL;
  laboratoryExtPk?: LaboratoryExtPk;
}
export interface PersonSessionOptions {
  role?: Role;
  remote?: Remote;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withUPSession<TBase extends Constructor>(Base: TBase) {
  return class WithUPSession extends Base {
    expSessionPk?: Expsessionpk;
    beamLineSetupId?: Beamlinesetupid;
    projectCode?: Projectcode;
    startDate?: Startdate;
    endDate?: Enddate;
    beamLineName?: Beamlinename;
    scheduled?: Scheduled;
    nbShifts?: Nbshifts;
    beamLineOperator?: Beamlineoperator;
    visit_number?: VisitNumber;
    usedFlag?: Usedflag;
    sessionTitle?: Sessiontitle;
    structureDeterminations?: Structuredeterminations;
    dewarTransport?: Dewartransport;
    databackupFrance?: Databackupfrance;
    databackupEurope?: Databackupeurope;
    operatorSiteNumber?: Operatorsitenumber;
    lastUpdate?: Lastupdate;
    protectedData?: Protecteddata;
    externalId?: Externalid;
    nbReimbDewars?: Nbreimbdewars;
    persons?: Persons;
  }
}
export function withPersonSessionLaboratory<TBase extends Constructor>(Base: TBase) {
  return class WithPersonSessionLaboratory extends Base {
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
    session_options?: PersonSessionOptions;
  }
}
export function withLaboratoryCreate<TBase extends Constructor>(Base: TBase) {
  return class WithLaboratoryCreate extends Base {
    name: LaboratoryName;
    address: Address;
    city: City;
    country: Country;
    url?: URL;
    laboratoryExtPk?: LaboratoryExtPk;
  }
}
export function withPersonSessionOptions<TBase extends Constructor>(Base: TBase) {
  return class WithPersonSessionOptions extends Base {
    role?: Role;
    remote?: Remote;
  }
}
