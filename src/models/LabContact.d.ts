/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Proposalid = number;
/**
 * The name for this lab contact
 */
export type CardName = string;
export type CourrierCompany = null | string;
export type AccountNo = null | string;
export type BillingReference = null | string;
export type AvgCustomsValue = number;
export type AvgTransportValue = number;
export type FirstName = string;
export type Surname = string;
export type EmailAddress = null | string;
export type PhoneNumber = null | string;
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
export type Laboratoryid = number;
export type Labcontactid = number;
export type Personid = number;
/**
 * Time lab contact was created
 */
export type Recordtimestamp = string;

export interface LabContact {
  proposalId: Proposalid;
  cardName: CardName;
  defaultCourrierCompany?: CourrierCompany;
  courierAccount?: AccountNo;
  billingReference?: BillingReference;
  dewarAvgCustomsValue?: AvgCustomsValue;
  dewarAvgTransportValue?: AvgTransportValue;
  Person: ContactPerson;
  labContactId: Labcontactid;
  personId: Personid;
  recordTimeStamp: Recordtimestamp;
}
export interface ContactPerson {
  givenName: FirstName;
  familyName: Surname;
  emailAddress?: EmailAddress;
  phoneNumber?: PhoneNumber;
  Laboratory?: Laboratory;
}
export interface Laboratory {
  name: LaboratoryName;
  address: Address;
  city: City;
  country: Country;
  url?: URL;
  laboratoryExtPk?: LaboratoryExtPk;
  recordTimeStamp?: RecordTimeStamp;
  laboratoryId: Laboratoryid;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withLabContact<TBase extends Constructor>(Base: TBase) {
  return class WithLabContact extends Base {
    proposalId: Proposalid;
    cardName: CardName;
    defaultCourrierCompany?: CourrierCompany;
    courierAccount?: AccountNo;
    billingReference?: BillingReference;
    dewarAvgCustomsValue?: AvgCustomsValue;
    dewarAvgTransportValue?: AvgTransportValue;
    Person: ContactPerson;
    labContactId: Labcontactid;
    personId: Personid;
    recordTimeStamp: Recordtimestamp;
  };
}
export function withContactPerson<TBase extends Constructor>(Base: TBase) {
  return class WithContactPerson extends Base {
    givenName: FirstName;
    familyName: Surname;
    emailAddress?: EmailAddress;
    phoneNumber?: PhoneNumber;
    Laboratory?: Laboratory;
  };
}
export function withLaboratory<TBase extends Constructor>(Base: TBase) {
  return class WithLaboratory extends Base {
    name: LaboratoryName;
    address: Address;
    city: City;
    country: Country;
    url?: URL;
    laboratoryExtPk?: LaboratoryExtPk;
    recordTimeStamp?: RecordTimeStamp;
    laboratoryId: Laboratoryid;
  };
}
