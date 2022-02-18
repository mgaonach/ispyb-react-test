/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface DataCollectionMetaData {
  snapshots: Snapshots;
}
/**
 * Snapshot statuses
 */
export interface Snapshots {
  [k: string]: boolean;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withDataCollectionMetaData<TBase extends Constructor>(
  Base: TBase
) {
  return class WithDataCollectionMetaData extends Base {
    snapshots: Snapshots;
  };
  /**
   * Snapshot statuses
   */
}
export function withSnapshots<TBase extends Constructor>(Base: TBase) {
  return class WithSnapshots extends Base {
    [k: string]: boolean;
  };
}
