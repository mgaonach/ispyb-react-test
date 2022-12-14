/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Location = (string | number)[];
export type Message = string;
export type ErrorType = string;
export type Detail = ValidationError[];

export interface HTTPValidationError {
  detail?: Detail;
}
export interface ValidationError {
  loc: Location;
  msg: Message;
  type: ErrorType;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withHTTPValidationError<TBase extends Constructor>(Base: TBase) {
  return class WithHTTPValidationError extends Base {
    detail?: Detail;
  }
}
export function withValidationError<TBase extends Constructor>(Base: TBase) {
  return class WithValidationError extends Base {
    loc: Location;
    msg: Message;
    type: ErrorType;
  }
}
