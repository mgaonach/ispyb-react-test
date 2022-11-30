/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Autoprocprogramid = number;
export type Processingcommandline = string;
export type Processingprograms = string;
/**
 * An enumeration.
 */
export type StatusEnum = null | 0 | 1 | 2;
export type Processingmessage = string;
export type Processingstarttime = string;
export type Processingendtime = string;
export type Processingenvironment = string;
export type Recordtimestamp = string;
export type Processingjobid = number;
export type Displayname = string;
export type Comments = string;
export type Recordtimestamp1 = string;
export type Recipe = string;
export type Automatic = boolean;
export type Parameterkey = string;
export type Parametervalue = string;
export type Processingjobparameters = ProcessingJobParameter[];
/**
 * Number of attachments
 */
export type Attachments = number;
export type Autoprocprogrammessageid = number;
export type Autoprocprogramid1 = number;
export type Description = string;
export type Message = string;
/**
 * An enumeration.
 */
export type AutoProcProgramMessageSeverity = "ERROR" | "WARNING" | "INFO";
export type Recordtimestamp2 = string;
export type Autoprocprogrammessages = AutoProcProgramMessage[];
export type Imagesweepcount = number;
export type Refinedxbeam = number;
export type Refinedybeam = number;
export type Spacegroup = string;
export type RefinedcellA = number;
export type RefinedcellB = number;
export type RefinedcellC = number;
export type RefinedcellAlpha = number;
export type RefinedcellBeta = number;
export type RefinedcellGamma = number;
export type Comments1 = string;
/**
 * An enumeration.
 */
export type ScalingStatisticsType = "overall" | "innerShell" | "outerShell";
export type Resolutionlimitlow = number;
export type Resolutionlimithigh = number;
export type Rmerge = number;
export type Rmeasalliplusiminus = number;
export type Rpimalliplusiminus = number;
export type Fractionalpartialbias = number;
export type Ntotalobservations = number;
export type Ntotaluniqueobservations = number;
export type Meanioversigi = number;
export type Completeness = number;
export type Multiplicity = number;
export type Anomalouscompleteness = number;
export type Anomalousmultiplicity = number;
export type Anomalous = boolean;
export type Cchalf = number;
export type Ccanomalous = number;
export type Resioversigi2 = number;
export type Autoprocscalingstatistics = AutoProcScalingStatistics[];
export type Autoprocscalinghasint = AutoProcScalingHasInt[];
export type Xbeam = number;
export type Ybeam = number;
export type Autoprocintegration = AutoProcIntegration[];

export interface AutoProcProgramIntegration {
  autoProcProgramId: Autoprocprogramid;
  processingCommandLine?: Processingcommandline;
  processingPrograms?: Processingprograms;
  processingStatus?: StatusEnum;
  processingMessage?: Processingmessage;
  processingStartTime?: Processingstarttime;
  processingEndTime?: Processingendtime;
  processingEnvironment?: Processingenvironment;
  recordTimeStamp: Recordtimestamp;
  ProcessingJob?: ProcessingJob;
  _metadata: AutoProcProgramMetadata;
  AutoProcIntegration?: Autoprocintegration;
}
export interface ProcessingJob {
  processingJobId: Processingjobid;
  displayName?: Displayname;
  comments?: Comments;
  recordTimestamp: Recordtimestamp1;
  recipe?: Recipe;
  automatic: Automatic;
  ProcessingJobParameters?: Processingjobparameters;
}
export interface ProcessingJobParameter {
  parameterKey: Parameterkey;
  parameterValue: Parametervalue;
}
export interface AutoProcProgramMetadata {
  attachments?: Attachments;
  autoProcProgramMessages?: Autoprocprogrammessages;
  imageSweepCount?: Imagesweepcount;
}
export interface AutoProcProgramMessage {
  autoProcProgramMessageId: Autoprocprogrammessageid;
  autoProcProgramId: Autoprocprogramid1;
  description: Description;
  message: Message;
  severity: AutoProcProgramMessageSeverity;
  recordTimeStamp: Recordtimestamp2;
}
export interface AutoProcIntegration {
  refinedXBeam?: Refinedxbeam;
  refinedYBeam?: Refinedybeam;
  AutoProcScalingHasInt?: Autoprocscalinghasint;
  DataCollection?: AutoProcIntegrationDataCollection;
}
export interface AutoProcScalingHasInt {
  AutoProcScaling?: AutoProcScaling;
}
export interface AutoProcScaling {
  AutoProc?: AutoProc;
  AutoProcScalingStatistics?: Autoprocscalingstatistics;
}
export interface AutoProc {
  spaceGroup: Spacegroup;
  refinedCell_a: RefinedcellA;
  refinedCell_b: RefinedcellB;
  refinedCell_c: RefinedcellC;
  refinedCell_alpha: RefinedcellAlpha;
  refinedCell_beta: RefinedcellBeta;
  refinedCell_gamma: RefinedcellGamma;
}
export interface AutoProcScalingStatistics {
  comments?: Comments1;
  scalingStatisticsType?: ScalingStatisticsType;
  resolutionLimitLow?: Resolutionlimitlow;
  resolutionLimitHigh?: Resolutionlimithigh;
  rMerge?: Rmerge;
  rMeasAllIPlusIMinus?: Rmeasalliplusiminus;
  rPimAllIPlusIMinus?: Rpimalliplusiminus;
  fractionalPartialBias?: Fractionalpartialbias;
  nTotalObservations?: Ntotalobservations;
  nTotalUniqueObservations?: Ntotaluniqueobservations;
  meanIOverSigI?: Meanioversigi;
  completeness?: Completeness;
  multiplicity?: Multiplicity;
  anomalousCompleteness?: Anomalouscompleteness;
  anomalousMultiplicity?: Anomalousmultiplicity;
  anomalous?: Anomalous;
  ccHalf?: Cchalf;
  ccAnomalous?: Ccanomalous;
  resIOverSigI2?: Resioversigi2;
}
export interface AutoProcIntegrationDataCollection {
  xBeam?: Xbeam;
  yBeam?: Ybeam;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withAutoProcProgramIntegration<TBase extends Constructor>(Base: TBase) {
  return class WithAutoProcProgramIntegration extends Base {
    autoProcProgramId: Autoprocprogramid;
    processingCommandLine?: Processingcommandline;
    processingPrograms?: Processingprograms;
    processingStatus?: StatusEnum;
    processingMessage?: Processingmessage;
    processingStartTime?: Processingstarttime;
    processingEndTime?: Processingendtime;
    processingEnvironment?: Processingenvironment;
    recordTimeStamp: Recordtimestamp;
    ProcessingJob?: ProcessingJob;
    _metadata: AutoProcProgramMetadata;
    AutoProcIntegration?: Autoprocintegration;
  }
}
export function withProcessingJob<TBase extends Constructor>(Base: TBase) {
  return class WithProcessingJob extends Base {
    processingJobId: Processingjobid;
    displayName?: Displayname;
    comments?: Comments;
    recordTimestamp: Recordtimestamp1;
    recipe?: Recipe;
    automatic: Automatic;
    ProcessingJobParameters?: Processingjobparameters;
  }
}
export function withProcessingJobParameter<TBase extends Constructor>(Base: TBase) {
  return class WithProcessingJobParameter extends Base {
    parameterKey: Parameterkey;
    parameterValue: Parametervalue;
  }
}
export function withAutoProcProgramMetadata<TBase extends Constructor>(Base: TBase) {
  return class WithAutoProcProgramMetadata extends Base {
    attachments?: Attachments;
    autoProcProgramMessages?: Autoprocprogrammessages;
    imageSweepCount?: Imagesweepcount;
  }
}
export function withAutoProcProgramMessage<TBase extends Constructor>(Base: TBase) {
  return class WithAutoProcProgramMessage extends Base {
    autoProcProgramMessageId: Autoprocprogrammessageid;
    autoProcProgramId: Autoprocprogramid1;
    description: Description;
    message: Message;
    severity: AutoProcProgramMessageSeverity;
    recordTimeStamp: Recordtimestamp2;
  }
}
export function withAutoProcIntegration<TBase extends Constructor>(Base: TBase) {
  return class WithAutoProcIntegration extends Base {
    refinedXBeam?: Refinedxbeam;
    refinedYBeam?: Refinedybeam;
    AutoProcScalingHasInt?: Autoprocscalinghasint;
    DataCollection?: AutoProcIntegrationDataCollection;
  }
}
export function withAutoProcScalingHasInt<TBase extends Constructor>(Base: TBase) {
  return class WithAutoProcScalingHasInt extends Base {
    AutoProcScaling?: AutoProcScaling;
  }
}
export function withAutoProcScaling<TBase extends Constructor>(Base: TBase) {
  return class WithAutoProcScaling extends Base {
    AutoProc?: AutoProc;
    AutoProcScalingStatistics?: Autoprocscalingstatistics;
  }
}
export function withAutoProc<TBase extends Constructor>(Base: TBase) {
  return class WithAutoProc extends Base {
    spaceGroup: Spacegroup;
    refinedCell_a: RefinedcellA;
    refinedCell_b: RefinedcellB;
    refinedCell_c: RefinedcellC;
    refinedCell_alpha: RefinedcellAlpha;
    refinedCell_beta: RefinedcellBeta;
    refinedCell_gamma: RefinedcellGamma;
  }
}
export function withAutoProcScalingStatistics<TBase extends Constructor>(Base: TBase) {
  return class WithAutoProcScalingStatistics extends Base {
    comments?: Comments1;
    scalingStatisticsType?: ScalingStatisticsType;
    resolutionLimitLow?: Resolutionlimitlow;
    resolutionLimitHigh?: Resolutionlimithigh;
    rMerge?: Rmerge;
    rMeasAllIPlusIMinus?: Rmeasalliplusiminus;
    rPimAllIPlusIMinus?: Rpimalliplusiminus;
    fractionalPartialBias?: Fractionalpartialbias;
    nTotalObservations?: Ntotalobservations;
    nTotalUniqueObservations?: Ntotaluniqueobservations;
    meanIOverSigI?: Meanioversigi;
    completeness?: Completeness;
    multiplicity?: Multiplicity;
    anomalousCompleteness?: Anomalouscompleteness;
    anomalousMultiplicity?: Anomalousmultiplicity;
    anomalous?: Anomalous;
    ccHalf?: Cchalf;
    ccAnomalous?: Ccanomalous;
    resIOverSigI2?: Resioversigi2;
  }
}
export function withAutoProcIntegrationDataCollection<TBase extends Constructor>(Base: TBase) {
  return class WithAutoProcIntegrationDataCollection extends Base {
    xBeam?: Xbeam;
    yBeam?: Ybeam;
  }
}
