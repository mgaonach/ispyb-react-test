/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Id = number;
export type Type = string;
export type Starttime = string;
export type Item = DataCollection | RobotAction;
export type Wavelength = number;
export type Experimenttype = string;
export type Actiontype = string;
export type Starttimestamp = string;

export interface Event {
  id: Id;
  type: Type;
  startTime: Starttime;
  Item: Item;
}
export interface DataCollection {
  wavelength: Wavelength;
  DataCollectionGroup: DataCollectionGroup;
}
export interface DataCollectionGroup {
  experimentType: Experimenttype;
}
export interface RobotAction {
  actionType: Actiontype;
  startTimestamp: Starttimestamp;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withEvent<TBase extends Constructor>(Base: TBase) {
  return class WithEvent extends Base {
    id: Id;
    type: Type;
    startTime: Starttime;
    Item: Item;
  }
}
export function withDataCollection<TBase extends Constructor>(Base: TBase) {
  return class WithDataCollection extends Base {
    wavelength: Wavelength;
    DataCollectionGroup: DataCollectionGroup;
  }
}
export function withDataCollectionGroup<TBase extends Constructor>(Base: TBase) {
  return class WithDataCollectionGroup extends Base {
    experimentType: Experimenttype;
  }
}
export function withRobotAction<TBase extends Constructor>(Base: TBase) {
  return class WithRobotAction extends Base {
    actionType: Actiontype;
    startTimestamp: Starttimestamp;
  }
}
