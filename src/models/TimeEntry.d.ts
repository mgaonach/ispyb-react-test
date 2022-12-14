/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type TotalTime = number;
export type TimeBeforeFirstDataCollection = number;
export type TimeUsedForDataCollections = number;
export type TimeUsedForEnergyScans = number;
export type TotalUsedForXrfScans = number;
export type TotalUsedForRobotSampleActions = number;
export type TimeWaitingForStrategy = number;
export type TotalWaitingForCentring = number;
export type TimeTakenWithFaults = number;
export type TimeRemaining = number;
export type TimeNotUsedByOtherTypes = number;

export interface TimeEntry {
  duration?: TotalTime;
  startup?: TimeBeforeFirstDataCollection;
  datacollection?: TimeUsedForDataCollections;
  edge?: TimeUsedForEnergyScans;
  xrf?: TotalUsedForXrfScans;
  robot?: TotalUsedForRobotSampleActions;
  strategy?: TimeWaitingForStrategy;
  centring?: TotalWaitingForCentring;
  fault?: TimeTakenWithFaults;
  remaining?: TimeRemaining;
  thinking?: TimeNotUsedByOtherTypes;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withTimeEntry<TBase extends Constructor>(Base: TBase) {
  return class WithTimeEntry extends Base {
    duration?: TotalTime;
    startup?: TimeBeforeFirstDataCollection;
    datacollection?: TimeUsedForDataCollections;
    edge?: TimeUsedForEnergyScans;
    xrf?: TotalUsedForXrfScans;
    robot?: TotalUsedForRobotSampleActions;
    strategy?: TimeWaitingForStrategy;
    centring?: TotalWaitingForCentring;
    fault?: TimeTakenWithFaults;
    remaining?: TimeRemaining;
    thinking?: TimeNotUsedByOtherTypes;
  }
}
