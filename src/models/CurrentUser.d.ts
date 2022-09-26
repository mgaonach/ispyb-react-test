/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Givenname = string;
export type Familyname = string;
export type Permissions = string[];
export type Personid = number;
export type Uigroups = string[];

export interface CurrentUser {
  givenName: Givenname;
  familyName: Familyname;
  Permissions: Permissions;
  personId: Personid;
  uiGroups: Uigroups;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withCurrentUser<TBase extends Constructor>(Base: TBase) {
  return class WithCurrentUser extends Base {
    givenName: Givenname;
    familyName: Familyname;
    Permissions: Permissions;
    personId: Personid;
    uiGroups: Uigroups;
  };
}