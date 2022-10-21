/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Overview = BreakdownOverviewSession | BreakdownOverviewRun;
export type Startdate = string;
export type Enddate = string;
export type Duration = number;
export type Beamlinename = string;
export type Sessionid = string;
export type Session = string;
export type Datacollections = number;
export type Failed = number;
export type Robot = number;
export type Edge = number;
export type Xrf = number;
export type Startdate1 = string;
export type Enddate1 = string;
export type Duration1 = number;
export type Run = string;
export type Eventtype = string;
export type Starttime = string;
export type Endtime = string;
export type Protein = string;
export type Sample = string;
export type Subtype = string;
export type Status = string;
export type Title = string;
export type Session1 = string;
export type Sessionid1 = string;
export type History = BreakdownPoint[];
export type Time = string[];
export type Title1 = string;
export type Unit = string;
export type Data = unknown[];
export type Series = BreakdownPlottable[];

export interface Breakdown {
  overview: Overview;
  history: History;
  plottables: BreakdownPlottables;
}
export interface BreakdownOverviewSession {
  startDate: Startdate;
  endDate: Enddate;
  duration: Duration;
  beamLineName: Beamlinename;
  sessionId: Sessionid;
  session?: Session;
  counts: BreakdownOverviewCounts;
}
export interface BreakdownOverviewCounts {
  datacollections: Datacollections;
  failed: Failed;
  datacollectionTypes: Datacollectiontypes;
  robot: Robot;
  edge: Edge;
  xrf: Xrf;
}
export interface Datacollectiontypes {
  [k: string]: number;
}
export interface BreakdownOverviewRun {
  startDate: Startdate1;
  endDate: Enddate1;
  duration: Duration1;
  run: Run;
  counts: BreakdownOverviewCounts;
}
export interface BreakdownPoint {
  eventType: Eventtype;
  startTime: Starttime;
  endTime: Endtime;
  protein?: Protein;
  sample?: Sample;
  subType?: Subtype;
  status?: Status;
  title?: Title;
  session?: Session1;
  sessionId?: Sessionid1;
}
export interface BreakdownPlottables {
  time: Time;
  series: Series;
}
export interface BreakdownPlottable {
  title: Title1;
  unit?: Unit;
  data: Data;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withBreakdown<TBase extends Constructor>(Base: TBase) {
  return class WithBreakdown extends Base {
    overview: Overview;
    history: History;
    plottables: BreakdownPlottables;
  };
}
export function withBreakdownOverviewSession<TBase extends Constructor>(
  Base: TBase
) {
  return class WithBreakdownOverviewSession extends Base {
    startDate: Startdate;
    endDate: Enddate;
    duration: Duration;
    beamLineName: Beamlinename;
    sessionId: Sessionid;
    session?: Session;
    counts: BreakdownOverviewCounts;
  };
}
export function withBreakdownOverviewCounts<TBase extends Constructor>(
  Base: TBase
) {
  return class WithBreakdownOverviewCounts extends Base {
    datacollections: Datacollections;
    failed: Failed;
    datacollectionTypes: Datacollectiontypes;
    robot: Robot;
    edge: Edge;
    xrf: Xrf;
  };
}
export function withDatacollectiontypes<TBase extends Constructor>(
  Base: TBase
) {
  return class WithDatacollectiontypes extends Base {
    [k: string]: number;
  };
}
export function withBreakdownOverviewRun<TBase extends Constructor>(
  Base: TBase
) {
  return class WithBreakdownOverviewRun extends Base {
    startDate: Startdate1;
    endDate: Enddate1;
    duration: Duration1;
    run: Run;
    counts: BreakdownOverviewCounts;
  };
}
export function withBreakdownPoint<TBase extends Constructor>(Base: TBase) {
  return class WithBreakdownPoint extends Base {
    eventType: Eventtype;
    startTime: Starttime;
    endTime: Endtime;
    protein?: Protein;
    sample?: Sample;
    subType?: Subtype;
    status?: Status;
    title?: Title;
    session?: Session1;
    sessionId?: Sessionid1;
  };
}
export function withBreakdownPlottables<TBase extends Constructor>(
  Base: TBase
) {
  return class WithBreakdownPlottables extends Base {
    time: Time;
    series: Series;
  };
}
export function withBreakdownPlottable<TBase extends Constructor>(Base: TBase) {
  return class WithBreakdownPlottable extends Base {
    title: Title1;
    unit?: Unit;
    data: Data;
  };
}
