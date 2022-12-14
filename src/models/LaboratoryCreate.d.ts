/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

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

export interface LaboratoryCreate {
  name: LaboratoryName;
  address: Address;
  city: City;
  country: Country;
  url?: URL;
  laboratoryExtPk?: LaboratoryExtPk;
}

type Constructor<T = {}> = new (...args: any[]) => T;
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
