/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Proposalid = number;
export type Session1 = string;
export type Proposal = string;
export type VisitNumber = number;
export type Startdate = string;
export type Enddate = string;
export type Beamlinename = string;
export type Beamlineoperator = string;
export type Scheduled = boolean;
export type Sessionid = number;
export type Typename = string;
export type Sessiontype = SessionType[];
/**
 * Number of datacollections
 */
export type Datacollections = number;
/**
 * Beamline group for this session
 */
export type Uigroups = string[];
/**
 * Number of people registered on this session
 */
export type Persons = number;
/**
 * Whether this session is active
 */
export type Active = boolean;
/**
 * Whether this session is due to start soon or has ended recently (+/-20 min)
 */
export type ActiveSoon = boolean;

export interface Session {
  proposalId: Proposalid;
  session: Session1;
  proposal: Proposal;
  visit_number?: VisitNumber;
  startDate: Startdate;
  endDate: Enddate;
  beamLineName: Beamlinename;
  beamLineOperator?: Beamlineoperator;
  scheduled?: Scheduled;
  sessionId: Sessionid;
  SessionType: Sessiontype;
  _metadata: SessionMetaData;
}
export interface SessionType {
  typeName: Typename;
}
export interface SessionMetaData {
  datacollections?: Datacollections;
  uiGroups?: Uigroups;
  persons: Persons;
  active: Active;
  active_soon: ActiveSoon;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withSession<TBase extends Constructor>(Base: TBase) {
  return class WithSession extends Base {
    proposalId: Proposalid;
    session: Session1;
    proposal: Proposal;
    visit_number?: VisitNumber;
    startDate: Startdate;
    endDate: Enddate;
    beamLineName: Beamlinename;
    beamLineOperator?: Beamlineoperator;
    scheduled?: Scheduled;
    sessionId: Sessionid;
    SessionType: Sessiontype;
    _metadata: SessionMetaData;
  };
}
export function withSessionType<TBase extends Constructor>(Base: TBase) {
  return class WithSessionType extends Base {
    typeName: Typename;
  };
}
export function withSessionMetaData<TBase extends Constructor>(Base: TBase) {
  return class WithSessionMetaData extends Base {
    datacollections?: Datacollections;
    uiGroups?: Uigroups;
    persons: Persons;
    active: Active;
    active_soon: ActiveSoon;
  };
}
