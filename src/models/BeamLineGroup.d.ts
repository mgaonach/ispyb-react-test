/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type GroupName = string;
export type UIGroup = string;
/**
 * Permission required to view all proposals from these beamlines
 */
export type Permission = string;
export type BeamlineName = string;
/**
 * Whether this beamline is archived
 */
export type Archived = boolean;
export type Beamlines = BeamLineGroupBeamLine[];

export interface BeamLineGroup {
  groupName: GroupName;
  uiGroup: UIGroup;
  permission: Permission;
  beamLines?: Beamlines;
}
export interface BeamLineGroupBeamLine {
  beamLineName: BeamlineName;
  archived?: Archived;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withBeamLineGroup<TBase extends Constructor>(Base: TBase) {
  return class WithBeamLineGroup extends Base {
    groupName: GroupName;
    uiGroup: UIGroup;
    permission: Permission;
    beamLines?: Beamlines;
  };
}
export function withBeamLineGroupBeamLine<TBase extends Constructor>(
  Base: TBase
) {
  return class WithBeamLineGroupBeamLine extends Base {
    beamLineName: BeamlineName;
    archived?: Archived;
  };
}
