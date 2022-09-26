/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Url to sample image
 */
export type Url = string;

export interface SampleImageMetaData {
  url: Url;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withSampleImageMetaData<TBase extends Constructor>(
  Base: TBase
) {
  return class WithSampleImageMetaData extends Base {
    url: Url;
  };
}
