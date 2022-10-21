/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Number of sub samples
 */
export type Subsamples = number;
/**
 * Number of data collections
 */
export type Datacollections = number;
/**
 * Types of data collections
 */
export type Types = string[];
/**
 * Whether this sample is queued for data collection
 */
export type Queued = boolean;
/**
 * Number of successful strategies
 */
export type Strategies = number;
/**
 * Number of successful auto-integrations
 */
export type Autointegrations = number;
/**
 * Highest integration resolution
 */
export type Integratedresolution = number;
/**
 * The associated proposal
 */
export type Proposal = string;

export interface SampleMetaData {
  subsamples: Subsamples;
  datacollections: Datacollections;
  types?: Types;
  queued?: Queued;
  strategies?: Strategies;
  autoIntegrations?: Autointegrations;
  integratedResolution?: Integratedresolution;
  proposal?: Proposal;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withSampleMetaData<TBase extends Constructor>(Base: TBase) {
  return class WithSampleMetaData extends Base {
    subsamples: Subsamples;
    datacollections: Datacollections;
    types?: Types;
    queued?: Queued;
    strategies?: Strategies;
    autoIntegrations?: Autointegrations;
    integratedResolution?: Integratedresolution;
    proposal?: Proposal;
  };
}
