/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Title = string;
export type Proposalcode = string;
export type Proposalnumber = string;
export type Proposaltype = string;
export type Externalid = number;
export type State = string;
export type Persons = [PersonProposalLaboratory, ...PersonProposalLaboratory[]];
export type Siteid = number;
export type Personuuid = string;
export type Familyname = string;
export type Givenname = string;
export type Title1 = string;
export type Emailaddress = string;
export type Phonenumber = string;
export type Login = string;
export type Faxnumber = string;
export type Cache = string;
export type Externalid1 = number;
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
export type URL = string;
/**
 * External Id from the User Portal
 */
export type LaboratoryExtPk = number;
/**
 * Time Laboratory was created
 */
export type RecordTimeStamp = string;
export type Cardname = string;
export type Defaultcourriercompany = string;
export type Courieraccount = string;
export type Billingreference = string;
export type Dewaravgcustomsvalue = number;
export type Dewaravgtransportvalue = number;
export type Labcontacts = UPLabContact[];
export type Beamlinesetupid = number;
export type Beamcalendarid = number;
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
export type Expsessionpk = number;
export type Operatorsitenumber = string;
export type Lastupdate = string;
export type Protecteddata = string;
export type Externalid2 = number;
export type Archived = number;
export type Siteid1 = number;
export type Personuuid1 = string;
export type Familyname1 = string;
export type Givenname1 = string;
export type Title2 = string;
export type Emailaddress1 = string;
export type Phonenumber1 = string;
export type Login1 = string;
export type Faxnumber1 = string;
export type Cache1 = string;
export type Externalid3 = number;
export type Role =
  | 'Local Contact'
  | 'Local Contact 2'
  | 'Staff'
  | 'Team Leader'
  | 'Co-Investigator'
  | 'Principal Investigator'
  | 'Alternate Contact';
export type Remote = number;
export type Persons1 = PersonSessionLaboratory[];
export type Sessions = UPSession[];
export type Name = string;
export type Acronym = string;
export type Description = string;
export type Hazardgroup = number;
export type Containmentlevel = number;
export type Safetylevel = string;
export type Molecularmass = number;
export type Proteintype = string;
export type Iscreatedbysamplesheet = number;
export type Sequence = string;
export type ModId = string;
export type Componenttypeid = number;
export type Concentrationtypeid = number;
export type Externalid4 = number;
export type Density = number;
export type Abundance = number;
export type Isotropy = string;
export type Proteins = UPProtein[];

export interface UserPortalProposalSync {
  proposal: UPProposal;
  sessions?: Sessions;
  proteins?: Proteins;
}
export interface UPProposal {
  title?: Title;
  proposalCode: Proposalcode;
  proposalNumber: Proposalnumber;
  proposalType?: Proposaltype;
  externalId?: Externalid;
  state?: State;
  persons: Persons;
  labcontacts?: Labcontacts;
}
export interface PersonProposalLaboratory {
  siteId?: Siteid;
  personUUID?: Personuuid;
  familyName?: Familyname;
  givenName?: Givenname;
  title?: Title1;
  emailAddress?: Emailaddress;
  phoneNumber?: Phonenumber;
  login?: Login;
  faxNumber?: Faxnumber;
  cache?: Cache;
  externalId?: Externalid1;
  laboratory?: LaboratoryCreate;
}
export interface LaboratoryCreate {
  name: LaboratoryName;
  address: Address;
  city: City;
  country: Country;
  url?: URL;
  laboratoryExtPk?: LaboratoryExtPk;
  recordTimeStamp?: RecordTimeStamp;
}
export interface UPLabContact {
  cardName: Cardname;
  defaultCourrierCompany?: Defaultcourriercompany;
  courierAccount?: Courieraccount;
  billingReference?: Billingreference;
  dewarAvgCustomsValue?: Dewaravgcustomsvalue;
  dewarAvgTransportValue?: Dewaravgtransportvalue;
  person: PersonProposalLaboratory;
}
export interface UPSession {
  beamLineSetupId?: Beamlinesetupid;
  beamCalendarId?: Beamcalendarid;
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
  expSessionPk?: Expsessionpk;
  operatorSiteNumber?: Operatorsitenumber;
  lastUpdate?: Lastupdate;
  protectedData?: Protecteddata;
  externalId?: Externalid2;
  archived?: Archived;
  persons?: Persons1;
}
export interface PersonSessionLaboratory {
  siteId?: Siteid1;
  personUUID?: Personuuid1;
  familyName?: Familyname1;
  givenName?: Givenname1;
  title?: Title2;
  emailAddress?: Emailaddress1;
  phoneNumber?: Phonenumber1;
  login?: Login1;
  faxNumber?: Faxnumber1;
  cache?: Cache1;
  externalId?: Externalid3;
  laboratory?: LaboratoryCreate;
  session_options?: PersonSessionOptions;
}
export interface PersonSessionOptions {
  role?: Role;
  remote?: Remote;
}
export interface UPProtein {
  name?: Name;
  acronym: Acronym;
  description?: Description;
  hazardGroup: Hazardgroup;
  containmentLevel: Containmentlevel;
  safetyLevel?: Safetylevel;
  molecularMass?: Molecularmass;
  proteinType?: Proteintype;
  isCreatedBySampleSheet?: Iscreatedbysamplesheet;
  sequence?: Sequence;
  MOD_ID?: ModId;
  componentTypeId?: Componenttypeid;
  concentrationTypeId?: Concentrationtypeid;
  externalId?: Externalid4;
  density?: Density;
  abundance?: Abundance;
  isotropy?: Isotropy;
  person: PersonProposalLaboratory;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withUserPortalProposalSync<TBase extends Constructor>(
  Base: TBase
) {
  return class WithUserPortalProposalSync extends Base {
    proposal: UPProposal;
    sessions?: Sessions;
    proteins?: Proteins;
  };
}
export function withUPProposal<TBase extends Constructor>(Base: TBase) {
  return class WithUPProposal extends Base {
    title?: Title;
    proposalCode: Proposalcode;
    proposalNumber: Proposalnumber;
    proposalType?: Proposaltype;
    externalId?: Externalid;
    state?: State;
    persons: Persons;
    labcontacts?: Labcontacts;
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
    title?: Title1;
    emailAddress?: Emailaddress;
    phoneNumber?: Phonenumber;
    login?: Login;
    faxNumber?: Faxnumber;
    cache?: Cache;
    externalId?: Externalid1;
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
    recordTimeStamp?: RecordTimeStamp;
  };
}
export function withUPLabContact<TBase extends Constructor>(Base: TBase) {
  return class WithUPLabContact extends Base {
    cardName: Cardname;
    defaultCourrierCompany?: Defaultcourriercompany;
    courierAccount?: Courieraccount;
    billingReference?: Billingreference;
    dewarAvgCustomsValue?: Dewaravgcustomsvalue;
    dewarAvgTransportValue?: Dewaravgtransportvalue;
    person: PersonProposalLaboratory;
  };
}
export function withUPSession<TBase extends Constructor>(Base: TBase) {
  return class WithUPSession extends Base {
    beamLineSetupId?: Beamlinesetupid;
    beamCalendarId?: Beamcalendarid;
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
    expSessionPk?: Expsessionpk;
    operatorSiteNumber?: Operatorsitenumber;
    lastUpdate?: Lastupdate;
    protectedData?: Protecteddata;
    externalId?: Externalid2;
    archived?: Archived;
    persons?: Persons1;
  };
}
export function withPersonSessionLaboratory<TBase extends Constructor>(
  Base: TBase
) {
  return class WithPersonSessionLaboratory extends Base {
    siteId?: Siteid1;
    personUUID?: Personuuid1;
    familyName?: Familyname1;
    givenName?: Givenname1;
    title?: Title2;
    emailAddress?: Emailaddress1;
    phoneNumber?: Phonenumber1;
    login?: Login1;
    faxNumber?: Faxnumber1;
    cache?: Cache1;
    externalId?: Externalid3;
    laboratory?: LaboratoryCreate;
    session_options?: PersonSessionOptions;
  };
}
export function withPersonSessionOptions<TBase extends Constructor>(
  Base: TBase
) {
  return class WithPersonSessionOptions extends Base {
    role?: Role;
    remote?: Remote;
  };
}
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
    isCreatedBySampleSheet?: Iscreatedbysamplesheet;
    sequence?: Sequence;
    MOD_ID?: ModId;
    componentTypeId?: Componenttypeid;
    concentrationTypeId?: Concentrationtypeid;
    externalId?: Externalid4;
    density?: Density;
    abundance?: Abundance;
    isotropy?: Isotropy;
    person: PersonProposalLaboratory;
  };
}
