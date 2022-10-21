/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Url to autoproc program attachment
 */
export type Url = string;

export interface AutoProcProgramAttachmentMetaData {
  url: Url;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withAutoProcProgramAttachmentMetaData<
  TBase extends Constructor
>(Base: TBase) {
  return class WithAutoProcProgramAttachmentMetaData extends Base {
    url: Url;
  };
}
