/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Datacollectionfileattachmentid = number;
export type Datacollectionid = number;
export type Filetype = string;
/**
 * Url to data collection file attachment
 */
export type Url = string;
/**
 * File name
 */
export type Filename = string;

export interface DataCollectionFileAttachment {
  dataCollectionFileAttachmentId: Datacollectionfileattachmentid;
  dataCollectionId: Datacollectionid;
  fileType: Filetype;
  _metadata: DataCollectionFileAttachmentMetaData;
}
export interface DataCollectionFileAttachmentMetaData {
  url: Url;
  fileName: Filename;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withDataCollectionFileAttachment<TBase extends Constructor>(
  Base: TBase
) {
  return class WithDataCollectionFileAttachment extends Base {
    dataCollectionFileAttachmentId: Datacollectionfileattachmentid;
    dataCollectionId: Datacollectionid;
    fileType: Filetype;
    _metadata: DataCollectionFileAttachmentMetaData;
  };
}
export function withDataCollectionFileAttachmentMetaData<
  TBase extends Constructor
>(Base: TBase) {
  return class WithDataCollectionFileAttachmentMetaData extends Base {
    url: Url;
    fileName: Filename;
  };
}
