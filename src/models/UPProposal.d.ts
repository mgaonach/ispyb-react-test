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
export type Cardname = string;
export type Defaultcourriercompany = string;
export type Courieraccount = string;
export type Billingreference = string;
export type Dewaravgcustomsvalue = number;
export type Dewaravgtransportvalue = number;
export type Labcontacts = UPLabContact[];

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
export interface UPLabContact {
  cardName: Cardname;
  defaultCourrierCompany?: Defaultcourriercompany;
  courierAccount?: Courieraccount;
  billingReference?: Billingreference;
  dewarAvgCustomsValue?: Dewaravgcustomsvalue;
  dewarAvgTransportValue?: Dewaravgtransportvalue;
  person: PersonProposalLaboratory;
}

type Constructor<T = {}> = new (...args: any[]) => T;
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
  }
}
export function withPersonProposalLaboratory<TBase extends Constructor>(Base: TBase) {
  return class WithPersonProposalLaboratory extends Base {
    siteId?: Siteid;
    personUUID?: Personuuid;
    familyName?: Familyname;
    givenName?: Givenname;
    title?: Title1;
    emailAddress?: Emailaddress;
    phoneNumber?: Phonenumber;
    login?: Login;
    passwd?: Passwd;
    faxNumber?: Faxnumber;
    externalId?: Externalid1;
    cache?: Cache;
    laboratory?: LaboratoryCreate;
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
export function withUPLabContact<TBase extends Constructor>(Base: TBase) {
  return class WithUPLabContact extends Base {
    cardName: Cardname;
    defaultCourrierCompany?: Defaultcourriercompany;
    courierAccount?: Courieraccount;
    billingReference?: Billingreference;
    dewarAvgCustomsValue?: Dewaravgcustomsvalue;
    dewarAvgTransportValue?: Dewaravgtransportvalue;
    person: PersonProposalLaboratory;
  }
}
