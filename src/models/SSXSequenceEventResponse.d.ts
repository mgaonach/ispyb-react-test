/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Sequenceeventid = number;
export type Sequenceid = number;
export type Imageid = number;
export type Componentid = number;
export type Sequenceeventtypeid = number;
export type Name = string;
export type Time = string;
export type Duration = number;
export type Period = number;
export type Repetition = number;
export type Sequenceeventtypeid1 = number;
export type Name1 = string;

export interface SSXSequenceEventResponse {
  sequenceEventId: Sequenceeventid;
  sequenceId: Sequenceid;
  imageId?: Imageid;
  componentId?: Componentid;
  sequenceEventTypeId: Sequenceeventtypeid;
  name?: Name;
  time: Time;
  duration?: Duration;
  period?: Period;
  repetition?: Repetition;
  SequenceEventType: SequenceEventType;
}
export interface SequenceEventType {
  sequenceEventTypeId: Sequenceeventtypeid1;
  name: Name1;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withSSXSequenceEventResponse<TBase extends Constructor>(Base: TBase) {
  return class WithSSXSequenceEventResponse extends Base {
    sequenceEventId: Sequenceeventid;
    sequenceId: Sequenceid;
    imageId?: Imageid;
    componentId?: Componentid;
    sequenceEventTypeId: Sequenceeventtypeid;
    name?: Name;
    time: Time;
    duration?: Duration;
    period?: Period;
    repetition?: Repetition;
    SequenceEventType: SequenceEventType;
  }
}
export function withSequenceEventType<TBase extends Constructor>(Base: TBase) {
  return class WithSequenceEventType extends Base {
    sequenceEventTypeId: Sequenceeventtypeid1;
    name: Name1;
  }
}
