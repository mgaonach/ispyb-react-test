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
export type LaboratoryName = string;
export type Address = string;
export type City = string;
export type PostCode = string;
export type Country = string;

export interface LabContactCreate {
  proposalId: Proposalid;
  cardName: CardName;
  defaultCourrierCompany?: CourrierCompany;
  courierAccount?: AccountNo;
  billingReference?: BillingReference;
  dewarAvgCustomsValue?: AvgCustomsValue;
  dewarAvgTransportValue?: AvgTransportValue;
  Person: ContactPerson;
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
  postcode: PostCode;
  country: Country;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withLabContactCreate<TBase extends Constructor>(Base: TBase) {
  return class WithLabContactCreate extends Base {
    proposalId: Proposalid;
    cardName: CardName;
    defaultCourrierCompany?: CourrierCompany;
    courierAccount?: AccountNo;
    billingReference?: BillingReference;
    dewarAvgCustomsValue?: AvgCustomsValue;
    dewarAvgTransportValue?: AvgTransportValue;
    Person: ContactPerson;
  }
}
export function withContactPerson<TBase extends Constructor>(Base: TBase) {
  return class WithContactPerson extends Base {
    givenName: FirstName;
    familyName: Surname;
    emailAddress?: EmailAddress;
    phoneNumber?: PhoneNumber;
    Laboratory?: Laboratory;
  }
}
export function withLaboratory<TBase extends Constructor>(Base: TBase) {
  return class WithLaboratory extends Base {
    name: LaboratoryName;
    address: Address;
    city: City;
    postcode: PostCode;
    country: Country;
  }
}
