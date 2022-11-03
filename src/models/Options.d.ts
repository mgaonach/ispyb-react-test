/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Displayed at the top of the UI
 */
export type MessageOfTheDay = string;
export type GroupName = string;
/**
 * Display type to use in the UI
 */
export type UIGroup = string;
/**
 * Permission required to view all proposals from these beamlines
 */
export type Permission = string;
export type BeamlineName = string;
export type SampleChangerType = null | string;
/**
 * If no specific type is available a capacity can be defined for the generic view
 */
export type SampleChangerCapacity = null | number;
/**
 * Whether this beamline is archived (no longer displayed on landing page)
 */
export type Archived = boolean;
export type Beamlines = BeamLineGroupBeamLine[];
export type BeamlineGroups = BeamLineGroup[];
/**
 * Enable query debugging
 */
export type QueryDebugging = boolean;
/**
 * Enable legacy routes
 */
export type LegacyRoutes = boolean;
/**
 * Enable webservices called from external applications
 */
export type WebserviceRoutes = boolean;
/**
 * Automatically create a `Person` entry if the `login` is missing from the database. (!) Warning modifies the database
 */
export type CreateMissingLogin = boolean;

/**
 * All available application options
 */
export interface Options {
  motd?: MessageOfTheDay;
  beamLineGroups?: BeamlineGroups;
  query_debug?: QueryDebugging;
  enable_legacy_routes?: LegacyRoutes;
  enable_webservice_routes?: WebserviceRoutes;
  create_person_on_missing?: CreateMissingLogin;
}
export interface BeamLineGroup {
  groupName: GroupName;
  uiGroup: UIGroup;
  permission: Permission;
  beamLines?: Beamlines;
}
export interface BeamLineGroupBeamLine {
  beamLineName: BeamlineName;
  sampleChangerType?: SampleChangerType;
  sampleChangerCapacity?: SampleChangerCapacity;
  archived?: Archived;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withOptions<TBase extends Constructor>(Base: TBase) {
  return class WithOptions extends Base {
    motd?: MessageOfTheDay;
    beamLineGroups?: BeamlineGroups;
    query_debug?: QueryDebugging;
    enable_legacy_routes?: LegacyRoutes;
    enable_webservice_routes?: WebserviceRoutes;
    create_person_on_missing?: CreateMissingLogin;
  };
}
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
    sampleChangerType?: SampleChangerType;
    sampleChangerCapacity?: SampleChangerCapacity;
    archived?: Archived;
  };
}
