/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Eventid = number;
export type Eventchainid = number;
export type Componentid = number;
export type Eventtypeid = number;
export type Name = string;
export type Offset = number;
export type Duration = number;
export type Period = number;
export type Repetition = number;
export type Eventtypeid1 = number;
export type Name1 = string;

export interface EventResponse {
  eventId: Eventid;
  eventChainId: Eventchainid;
  componentId?: Componentid;
  eventTypeId: Eventtypeid;
  name?: Name;
  offset: Offset;
  duration?: Duration;
  period?: Period;
  repetition?: Repetition;
  EventType: EventType;
}
export interface EventType {
  eventTypeId: Eventtypeid1;
  name: Name1;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withEventResponse<TBase extends Constructor>(Base: TBase) {
  return class WithEventResponse extends Base {
    eventId: Eventid;
    eventChainId: Eventchainid;
    componentId?: Componentid;
    eventTypeId: Eventtypeid;
    name?: Name;
    offset: Offset;
    duration?: Duration;
    period?: Period;
    repetition?: Repetition;
    EventType: EventType;
  }
}
export function withEventType<TBase extends Constructor>(Base: TBase) {
  return class WithEventType extends Base {
    eventTypeId: Eventtypeid1;
    name: Name1;
  }
}