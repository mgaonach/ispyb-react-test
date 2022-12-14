/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Proposalid = number;
export type Name = string;
export type SendingLabContact = number;
export type ReturnLabContact = number;
export type SafetyLevel = SafetyLevel1 & SafetyLevel2;
export type SafetyLevel1 = SafetyLevelEnum;
/**
 * An enumeration.
 */
export type SafetyLevelEnum = "GREEN" | "YELLOW" | "RED";
export type SafetyLevel2 = string;
export type Comments = string;

export interface ShippingCreate {
  proposalId: Proposalid;
  shippingName: Name;
  sendingLabContactId: SendingLabContact;
  returnLabContactId: ReturnLabContact;
  safetyLevel?: SafetyLevel;
  comments?: Comments;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withShippingCreate<TBase extends Constructor>(Base: TBase) {
  return class WithShippingCreate extends Base {
    proposalId: Proposalid;
    shippingName: Name;
    sendingLabContactId: SendingLabContact;
    returnLabContactId: ReturnLabContact;
    safetyLevel?: SafetyLevel;
    comments?: Comments;
  }
}
