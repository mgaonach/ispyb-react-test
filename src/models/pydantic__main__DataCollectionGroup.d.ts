/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Datacollectiongroupid = number;
export type Blsampleid = number;
export type Sessionid = number;
export type Workflowid = number;
export type Experimenttype = string;
export type Starttime = string;
export type Endtime = string;
export type Crystalclass = string;
export type Comments = string;
export type Detectormode = string;
export type Actualsamplebarcode = string;
export type Actualsampleslotincontainer = number;
export type Actualcontainerbarcode = string;
export type Actualcontainerslotinsc = number;
export type Xtalsnapshotfullpath = string;

export interface DataCollectionGroup {
  dataCollectionGroupId: Datacollectiongroupid;
  blSampleId?: Blsampleid;
  sessionId: Sessionid;
  workflowId?: Workflowid;
  experimentType?: Experimenttype;
  startTime?: Starttime;
  endTime?: Endtime;
  crystalClass?: Crystalclass;
  comments?: Comments;
  detectorMode?: Detectormode;
  actualSampleBarcode?: Actualsamplebarcode;
  actualSampleSlotInContainer?: Actualsampleslotincontainer;
  actualContainerBarcode?: Actualcontainerbarcode;
  actualContainerSlotInSC?: Actualcontainerslotinsc;
  xtalSnapshotFullPath?: Xtalsnapshotfullpath;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withDataCollectionGroup<TBase extends Constructor>(Base: TBase) {
  return class WithDataCollectionGroup extends Base {
    dataCollectionGroupId: Datacollectiongroupid;
    blSampleId?: Blsampleid;
    sessionId: Sessionid;
    workflowId?: Workflowid;
    experimentType?: Experimenttype;
    startTime?: Starttime;
    endTime?: Endtime;
    crystalClass?: Crystalclass;
    comments?: Comments;
    detectorMode?: Detectormode;
    actualSampleBarcode?: Actualsamplebarcode;
    actualSampleSlotInContainer?: Actualsampleslotincontainer;
    actualContainerBarcode?: Actualcontainerbarcode;
    actualContainerSlotInSC?: Actualcontainerslotinsc;
    xtalSnapshotFullPath?: Xtalsnapshotfullpath;
  }
}
