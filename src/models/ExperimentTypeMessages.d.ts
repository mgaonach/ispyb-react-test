/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type FrequencyOfThisErrorMessage = number;
export type TheErrorMessage = string;

export interface ExperimentTypeMessages {
  count: FrequencyOfThisErrorMessage;
  message: TheErrorMessage;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withExperimentTypeMessages<TBase extends Constructor>(Base: TBase) {
  return class WithExperimentTypeMessages extends Base {
    count: FrequencyOfThisErrorMessage;
    message: TheErrorMessage;
  }
}
