/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * `Successful` on success
 */
export type Status = string;
/**
 * Directory where the data is saved
 */
export type Directory = string;
/**
 * File template for data
 */
export type DataFileTemplate = string;
/**
 * For hdf5 files, path to the images
 */
export type ImageSubPath = string;
export type NumberOfImagesPoints = number;
export type Wavelength = number;
export type ExposureTime = number;
export type Flux = number;
export type BeamPositionHorizontal = number;
export type BeamPositionVertical = number;
export type BeamSizeAtSampleHorizontal = number;
export type BeamSizeAtSampleVertical = number;
export type BeamTransmision = number;
/**
 * At edge of detector
 */
export type Resolution = number;
export type DetectorDistance = number;
export type RotationAxisStart = number;
export type RotationAxisEnd = number;
export type RotationAxisOscillation = number;
export type RotationAxisMotor = string;
export type RotationAxisOverlap = number;
export type PhiStart = number;
export type KappaStart = number;
export type OmegaStart = number;
export type ChiStart = number;
export type BeamSizeX = number;
export type BeamSizeY = number;
export type Undulatorgap1 = number;
export type Undulatorgap2 = number;
export type Undulatorgap3 = number;
export type Beamshape = string;
export type Polarisation = number;
export type Imageprefix = string;
export type Magnification = number;
export type Binning = number;
export type ParticleDiameter = number;
export type Defocusstepsize = number;
export type Amountastigmatism = number;
export type Voltage = number;
export type Objaperture = number;
export type Datacollectionid = number;
export type Datacollectiongroupid = number;
export type Experimenttype = string;
export type Blsampleid = number;
export type Workflowid = number;
export type Comments = string;
export type Status1 = string;
export type Workflowtitle = string;
export type Workflowtype = string;
export type Gridinfoid = number;
export type Xoffset = number;
export type Yoffset = number;
export type DxMm = number;
export type DyMm = number;
export type StepsX = number;
export type StepsY = number;
export type Meshangle = number;
export type Orientation = string;
export type Pixelspermicronx = number;
export type Pixelspermicrony = number;
export type SnapshotOffsetxpixel = number;
export type SnapshotOffsetypixel = number;
export type Snaked = boolean;
export type Gridinfo = GridInfo[];
export type Datacollectionid1 = number;
export type Repetitionrate = number;
export type Energybandwidth = number;
export type Monostripe = string;
export type Jetspeed = number;
export type Jetsize = number;
export type Chippattern = string;
export type Chipmodel = string;
export type Reactionduration = number;
export type Laserenergy = number;
export type Experimentname = string;
export type Detectorid = number;
export type Detectortype = string;
export type Detectormanufacturer = string;
export type Detectormodel = string;
export type Detectorpixelsizehorizontal = number;
export type Detectorpixelsizevertical = number;
export type Detectorserialnumber = string;
export type Detectordistancemin = number;
export type Detectordistancemax = number;
export type Trustedpixelvaluerangelower = number;
export type Trustedpixelvaluerangeupper = number;
export type Sensorthickness = number;
export type Overload = number;
export type Xgeocorr = string;
export type Ygeocorr = string;
export type Detectormode = string;
export type Detectormaxresolution = number;
export type Detectorminresolution = number;
export type Cs = number;
export type Density = number;
export type Composition = string;
export type Localname = string;

export interface DataCollection {
  runStatus?: Status;
  imageDirectory?: Directory;
  fileTemplate?: DataFileTemplate;
  imageContainerSubPath?: ImageSubPath;
  numberOfImages?: NumberOfImagesPoints;
  wavelength?: Wavelength;
  exposureTime?: ExposureTime;
  flux?: Flux;
  xBeam?: BeamPositionHorizontal;
  yBeam?: BeamPositionVertical;
  beamSizeAtSampleX?: BeamSizeAtSampleHorizontal;
  beamSizeAtSampleY?: BeamSizeAtSampleVertical;
  transmission?: BeamTransmision;
  resolution?: Resolution;
  detectorDistance?: DetectorDistance;
  axisStart?: RotationAxisStart;
  axisEnd?: RotationAxisEnd;
  axisRange?: RotationAxisOscillation;
  rotationAxis?: RotationAxisMotor;
  overlap?: RotationAxisOverlap;
  phiStart?: PhiStart;
  kappaStart?: KappaStart;
  omegaStart?: OmegaStart;
  chiStart?: ChiStart;
  xBeamPix?: BeamSizeX;
  yBeamPix?: BeamSizeY;
  undulatorGap1?: Undulatorgap1;
  undulatorGap2?: Undulatorgap2;
  undulatorGap3?: Undulatorgap3;
  beamShape?: Beamshape;
  polarisation?: Polarisation;
  imagePrefix?: Imageprefix;
  magnification?: Magnification;
  binning?: Binning;
  particleDiameter?: ParticleDiameter;
  defocusStepSize?: Defocusstepsize;
  amountAstigmatism?: Amountastigmatism;
  voltage?: Voltage;
  objAperture?: Objaperture;
  dataCollectionId: Datacollectionid;
  DataCollectionGroup: DataCollectionGroup;
  GridInfo?: Gridinfo;
  SSXDataCollection?: SSXDataCollection;
  Detector?: Detector;
  _metadata: DataCollectionMetaData;
}
export interface DataCollectionGroup {
  dataCollectionGroupId: Datacollectiongroupid;
  experimentType?: Experimenttype;
  blSampleId?: Blsampleid;
  Workflow?: Workflow;
}
export interface Workflow {
  workflowId: Workflowid;
  comments?: Comments;
  status?: Status1;
  workflowTitle?: Workflowtitle;
  workflowType?: Workflowtype;
}
export interface GridInfo {
  gridInfoId: Gridinfoid;
  xOffset?: Xoffset;
  yOffset?: Yoffset;
  dx_mm?: DxMm;
  dy_mm?: DyMm;
  steps_x?: StepsX;
  steps_y?: StepsY;
  meshAngle?: Meshangle;
  orientation?: Orientation;
  pixelsPerMicronX?: Pixelspermicronx;
  pixelsPerMicronY?: Pixelspermicrony;
  snapshot_offsetXPixel?: SnapshotOffsetxpixel;
  snapshot_offsetYPixel?: SnapshotOffsetypixel;
  snaked?: Snaked;
}
export interface SSXDataCollection {
  dataCollectionId: Datacollectionid1;
  repetitionRate?: Repetitionrate;
  energyBandwidth?: Energybandwidth;
  monoStripe?: Monostripe;
  jetSpeed?: Jetspeed;
  jetSize?: Jetsize;
  chipPattern?: Chippattern;
  chipModel?: Chipmodel;
  reactionDuration?: Reactionduration;
  laserEnergy?: Laserenergy;
  experimentName?: Experimentname;
}
export interface Detector {
  detectorId: Detectorid;
  detectorType?: Detectortype;
  detectorManufacturer?: Detectormanufacturer;
  detectorModel?: Detectormodel;
  detectorPixelSizeHorizontal?: Detectorpixelsizehorizontal;
  detectorPixelSizeVertical?: Detectorpixelsizevertical;
  detectorSerialNumber?: Detectorserialnumber;
  detectorDistanceMin?: Detectordistancemin;
  detectorDistanceMax?: Detectordistancemax;
  trustedPixelValueRangeLower?: Trustedpixelvaluerangelower;
  trustedPixelValueRangeUpper?: Trustedpixelvaluerangeupper;
  sensorThickness?: Sensorthickness;
  overload?: Overload;
  XGeoCorr?: Xgeocorr;
  YGeoCorr?: Ygeocorr;
  detectorMode?: Detectormode;
  detectorMaxResolution?: Detectormaxresolution;
  detectorMinResolution?: Detectorminresolution;
  CS?: Cs;
  density?: Density;
  composition?: Composition;
  localName?: Localname;
}
export interface DataCollectionMetaData {
  snapshots: Snapshots;
}
/**
 * Snapshot statuses with ids 1-4
 */
export interface Snapshots {
  [k: string]: boolean;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withDataCollection<TBase extends Constructor>(Base: TBase) {
  return class WithDataCollection extends Base {
    runStatus?: Status;
    imageDirectory?: Directory;
    fileTemplate?: DataFileTemplate;
    imageContainerSubPath?: ImageSubPath;
    numberOfImages?: NumberOfImagesPoints;
    wavelength?: Wavelength;
    exposureTime?: ExposureTime;
    flux?: Flux;
    xBeam?: BeamPositionHorizontal;
    yBeam?: BeamPositionVertical;
    beamSizeAtSampleX?: BeamSizeAtSampleHorizontal;
    beamSizeAtSampleY?: BeamSizeAtSampleVertical;
    transmission?: BeamTransmision;
    resolution?: Resolution;
    detectorDistance?: DetectorDistance;
    axisStart?: RotationAxisStart;
    axisEnd?: RotationAxisEnd;
    axisRange?: RotationAxisOscillation;
    rotationAxis?: RotationAxisMotor;
    overlap?: RotationAxisOverlap;
    phiStart?: PhiStart;
    kappaStart?: KappaStart;
    omegaStart?: OmegaStart;
    chiStart?: ChiStart;
    xBeamPix?: BeamSizeX;
    yBeamPix?: BeamSizeY;
    undulatorGap1?: Undulatorgap1;
    undulatorGap2?: Undulatorgap2;
    undulatorGap3?: Undulatorgap3;
    beamShape?: Beamshape;
    polarisation?: Polarisation;
    imagePrefix?: Imageprefix;
    magnification?: Magnification;
    binning?: Binning;
    particleDiameter?: ParticleDiameter;
    defocusStepSize?: Defocusstepsize;
    amountAstigmatism?: Amountastigmatism;
    voltage?: Voltage;
    objAperture?: Objaperture;
    dataCollectionId: Datacollectionid;
    DataCollectionGroup: DataCollectionGroup;
    GridInfo?: Gridinfo;
    SSXDataCollection?: SSXDataCollection;
    Detector?: Detector;
    _metadata: DataCollectionMetaData;
  }
}
export function withDataCollectionGroup<TBase extends Constructor>(Base: TBase) {
  return class WithDataCollectionGroup extends Base {
    dataCollectionGroupId: Datacollectiongroupid;
    experimentType?: Experimenttype;
    blSampleId?: Blsampleid;
    Workflow?: Workflow;
  }
}
export function withWorkflow<TBase extends Constructor>(Base: TBase) {
  return class WithWorkflow extends Base {
    workflowId: Workflowid;
    comments?: Comments;
    status?: Status1;
    workflowTitle?: Workflowtitle;
    workflowType?: Workflowtype;
  }
}
export function withGridInfo<TBase extends Constructor>(Base: TBase) {
  return class WithGridInfo extends Base {
    gridInfoId: Gridinfoid;
    xOffset?: Xoffset;
    yOffset?: Yoffset;
    dx_mm?: DxMm;
    dy_mm?: DyMm;
    steps_x?: StepsX;
    steps_y?: StepsY;
    meshAngle?: Meshangle;
    orientation?: Orientation;
    pixelsPerMicronX?: Pixelspermicronx;
    pixelsPerMicronY?: Pixelspermicrony;
    snapshot_offsetXPixel?: SnapshotOffsetxpixel;
    snapshot_offsetYPixel?: SnapshotOffsetypixel;
    snaked?: Snaked;
  }
}
export function withSSXDataCollection<TBase extends Constructor>(Base: TBase) {
  return class WithSSXDataCollection extends Base {
    dataCollectionId: Datacollectionid1;
    repetitionRate?: Repetitionrate;
    energyBandwidth?: Energybandwidth;
    monoStripe?: Monostripe;
    jetSpeed?: Jetspeed;
    jetSize?: Jetsize;
    chipPattern?: Chippattern;
    chipModel?: Chipmodel;
    reactionDuration?: Reactionduration;
    laserEnergy?: Laserenergy;
    experimentName?: Experimentname;
  }
}
export function withDetector<TBase extends Constructor>(Base: TBase) {
  return class WithDetector extends Base {
    detectorId: Detectorid;
    detectorType?: Detectortype;
    detectorManufacturer?: Detectormanufacturer;
    detectorModel?: Detectormodel;
    detectorPixelSizeHorizontal?: Detectorpixelsizehorizontal;
    detectorPixelSizeVertical?: Detectorpixelsizevertical;
    detectorSerialNumber?: Detectorserialnumber;
    detectorDistanceMin?: Detectordistancemin;
    detectorDistanceMax?: Detectordistancemax;
    trustedPixelValueRangeLower?: Trustedpixelvaluerangelower;
    trustedPixelValueRangeUpper?: Trustedpixelvaluerangeupper;
    sensorThickness?: Sensorthickness;
    overload?: Overload;
    XGeoCorr?: Xgeocorr;
    YGeoCorr?: Ygeocorr;
    detectorMode?: Detectormode;
    detectorMaxResolution?: Detectormaxresolution;
    detectorMinResolution?: Detectorminresolution;
    CS?: Cs;
    density?: Density;
    composition?: Composition;
    localName?: Localname;
  }
}
export function withDataCollectionMetaData<TBase extends Constructor>(Base: TBase) {
  return class WithDataCollectionMetaData extends Base {
    snapshots: Snapshots;
  }
  /**
   * Snapshot statuses with ids 1-4
   */
}
export function withSnapshots<TBase extends Constructor>(Base: TBase) {
  return class WithSnapshots extends Base {
    [k: string]: boolean;
  }
}
