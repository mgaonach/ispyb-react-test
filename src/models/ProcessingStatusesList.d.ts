/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * An enumeration.
 */
export type StatusEnum = null | 0 | 1 | 2;
export type Autoprocprogramid = number;
export type Movie = number;
export type Motioncorrection = number;
export type Ctf = number;

export interface ProcessingStatusesList {
  statuses: Statuses;
}
export interface Statuses {
  [k: string]: ProcessingStatuses;
}
export interface ProcessingStatuses {
  screening?: Screening;
  xrc?: Xrc;
  processing?: Processing;
  autoIntegration?: Autointegration;
  em?: EMProcessingStatus;
}
export interface Screening {
  [k: string]: ScreeningProcesingStatus[];
}
export interface ScreeningProcesingStatus {
  status?: StatusEnum;
  indexingSuccess: StatusEnum;
}
export interface Xrc {
  [k: string]: ProcessingStatus[];
}
export interface ProcessingStatus {
  status?: StatusEnum;
}
export interface Processing {
  [k: string]: ProcessingProcessingStatus[];
}
export interface ProcessingProcessingStatus {
  status?: StatusEnum;
  autoProcProgramId: Autoprocprogramid;
}
export interface Autointegration {
  [k: string]: ProcessingProcessingStatus[];
}
export interface EMProcessingStatus {
  movie: Movie;
  motionCorrection: Motioncorrection;
  ctf: Ctf;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withProcessingStatusesList<TBase extends Constructor>(
  Base: TBase
) {
  return class WithProcessingStatusesList extends Base {
    statuses: Statuses;
  };
}
export function withStatuses<TBase extends Constructor>(Base: TBase) {
  return class WithStatuses extends Base {
    [k: string]: ProcessingStatuses;
  };
}
export function withProcessingStatuses<TBase extends Constructor>(Base: TBase) {
  return class WithProcessingStatuses extends Base {
    screening?: Screening;
    xrc?: Xrc;
    processing?: Processing;
    autoIntegration?: Autointegration;
    em?: EMProcessingStatus;
  };
}
export function withScreening<TBase extends Constructor>(Base: TBase) {
  return class WithScreening extends Base {
    [k: string]: ScreeningProcesingStatus[];
  };
}
export function withScreeningProcesingStatus<TBase extends Constructor>(
  Base: TBase
) {
  return class WithScreeningProcesingStatus extends Base {
    status?: StatusEnum;
    indexingSuccess: StatusEnum;
  };
}
export function withXrc<TBase extends Constructor>(Base: TBase) {
  return class WithXrc extends Base {
    [k: string]: ProcessingStatus[];
  };
}
export function withProcessingStatus<TBase extends Constructor>(Base: TBase) {
  return class WithProcessingStatus extends Base {
    status?: StatusEnum;
  };
}
export function withProcessing<TBase extends Constructor>(Base: TBase) {
  return class WithProcessing extends Base {
    [k: string]: ProcessingProcessingStatus[];
  };
}
export function withProcessingProcessingStatus<TBase extends Constructor>(
  Base: TBase
) {
  return class WithProcessingProcessingStatus extends Base {
    status?: StatusEnum;
    autoProcProgramId: Autoprocprogramid;
  };
}
export function withAutointegration<TBase extends Constructor>(Base: TBase) {
  return class WithAutointegration extends Base {
    [k: string]: ProcessingProcessingStatus[];
  };
}
export function withEMProcessingStatus<TBase extends Constructor>(Base: TBase) {
  return class WithEMProcessingStatus extends Base {
    movie: Movie;
    motionCorrection: Motioncorrection;
    ctf: Ctf;
  };
}
