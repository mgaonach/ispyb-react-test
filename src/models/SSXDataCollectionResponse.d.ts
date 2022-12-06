/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Ssxdatacollectionid = number;
export type Datacollectionid = number;
export type Repetitionrate = number;
export type Energybandwidth = number;
export type Monostripe = string;
export type Jetspeed = number;
export type Chippattern = string;
export type Chipmodel = string;
export type Reactionduration = number;
export type Datacollectionid1 = number;
export type Datacollectiongroupid = number;
export type Strategysubwedgeorigid = number;
export type Detectorid = number;
export type Blsubsampleid = number;
export type Startpositionid = number;
export type Endpositionid = number;
export type Datacollectionnumber = number;
export type Starttime = string;
export type Endtime = string;
export type Runstatus = string;
export type Axisstart = number;
export type Axisend = number;
export type Axisrange = number;
export type Overlap = number;
export type Numberofimages = number;
export type Startimagenumber = number;
export type Numberofpasses = number;
export type Exposuretime = number;
export type Imagedirectory = string;
export type Imageprefix = string;
export type Imagesuffix = string;
export type Imagecontainersubpath = string;
export type Filetemplate = string;
export type Wavelength = number;
export type Resolution = number;
export type Detectordistance = number;
export type Xbeam = number;
export type Ybeam = number;
export type Xbeampix = number;
export type Ybeampix = number;
export type Comments = string;
export type Printableforreport = number;
export type Slitgapvertical = number;
export type Slitgaphorizontal = number;
export type Transmission = number;
export type Synchrotronmode = string;
export type Xtalsnapshotfullpath1 = string;
export type Xtalsnapshotfullpath2 = string;
export type Xtalsnapshotfullpath3 = string;
export type Xtalsnapshotfullpath4 = string;
export type Rotationaxis = string;
export type Phistart = number;
export type Kappastart = number;
export type Omegastart = number;
export type Resolutionatcorner = number;
export type Detector2Theta = number;
export type Undulatorgap1 = number;
export type Undulatorgap2 = number;
export type Undulatorgap3 = number;
export type Beamsizeatsamplex = number;
export type Beamsizeatsampley = number;
export type Centeringmethod = string;
export type Averagetemperature = number;
export type Actualcenteringposition = string;
export type Beamshape = string;
export type Flux = number;
export type FluxEnd = number;
export type Totalabsorbeddose = number;
export type Bestwilsonplotpath = string;
export type Imagequalityindicatorsplotpath = string;
export type Imagequalityindicatorscsvpath = string;
export type Blsampleid = number;
export type Sessionid = number;
export type Experimenttype = string;
export type Crystalclass = string;
export type Chistart = number;
export type Detectormode = string;
export type Actualsamplebarcode = string;
export type Actualsampleslotincontainer = number;
export type Actualcontainerbarcode = string;
export type Actualcontainerslotinsc = number;
export type Positionid = number;
export type Focalspotsizeatsamplex = number;
export type Polarisation = number;
export type Focalspotsizeatsampley = number;
export type Apertureid = number;
export type Screeningorigid = number;
export type Processeddatafile = string;
export type Datfullpath = string;
export type Magnification = number;
export type Binning = number;
export type Particlediameter = number;
export type BoxsizeCtf = number;
export type Minresolution = number;
export type Mindefocus = number;
export type Maxdefocus = number;
export type Defocusstepsize = number;
export type Amountastigmatism = number;
export type Extractsize = number;
export type Bgradius = number;
export type Voltage = number;
export type Objaperture = number;
export type C1Aperture = number;
export type C2Aperture = number;
export type C3Aperture = number;
export type C1Lens = number;
export type C2Lens = number;
export type C3Lens = number;
export type Datacollectiongroupid1 = number;
export type Blsampleid1 = number;
export type Sessionid1 = number;
export type Workflowid = number;
export type Experimenttype1 = string;
export type Starttime1 = string;
export type Endtime1 = string;
export type Crystalclass1 = string;
export type Comments1 = string;
export type Detectormode1 = string;
export type Actualsamplebarcode1 = string;
export type Actualsampleslotincontainer1 = number;
export type Actualcontainerbarcode1 = string;
export type Actualcontainerslotinsc1 = number;
export type Xtalsnapshotfullpath = string;
export type Detectorid1 = number;
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
export type Detectormode2 = string;
export type Detectormaxresolution = number;
export type Detectorminresolution = number;
export type Cs = number;
export type Density = number;
export type Composition = string;
export type Localname = string;

export interface SSXDataCollectionResponse {
  ssxDataCollectionId: Ssxdatacollectionid;
  dataCollectionId: Datacollectionid;
  repetitionRate?: Repetitionrate;
  energyBandwidth?: Energybandwidth;
  monoStripe?: Monostripe;
  jetSpeed?: Jetspeed;
  chipPattern?: Chippattern;
  chipModel?: Chipmodel;
  reactionDuration?: Reactionduration;
  DataCollection: DataCollectionResponse;
}
export interface DataCollectionResponse {
  dataCollectionId: Datacollectionid1;
  dataCollectionGroupId: Datacollectiongroupid;
  strategySubWedgeOrigId?: Strategysubwedgeorigid;
  detectorId?: Detectorid;
  blSubSampleId?: Blsubsampleid;
  startPositionId?: Startpositionid;
  endPositionId?: Endpositionid;
  dataCollectionNumber?: Datacollectionnumber;
  startTime?: Starttime;
  endTime?: Endtime;
  runStatus?: Runstatus;
  axisStart?: Axisstart;
  axisEnd?: Axisend;
  axisRange?: Axisrange;
  overlap?: Overlap;
  numberOfImages?: Numberofimages;
  startImageNumber?: Startimagenumber;
  numberOfPasses?: Numberofpasses;
  exposureTime?: Exposuretime;
  imageDirectory?: Imagedirectory;
  imagePrefix?: Imageprefix;
  imageSuffix?: Imagesuffix;
  imageContainerSubPath?: Imagecontainersubpath;
  fileTemplate?: Filetemplate;
  wavelength?: Wavelength;
  resolution?: Resolution;
  detectorDistance?: Detectordistance;
  xBeam?: Xbeam;
  yBeam?: Ybeam;
  xBeamPix?: Xbeampix;
  yBeamPix?: Ybeampix;
  comments?: Comments;
  printableForReport?: Printableforreport;
  slitGapVertical?: Slitgapvertical;
  slitGapHorizontal?: Slitgaphorizontal;
  transmission?: Transmission;
  synchrotronMode?: Synchrotronmode;
  xtalSnapshotFullPath1?: Xtalsnapshotfullpath1;
  xtalSnapshotFullPath2?: Xtalsnapshotfullpath2;
  xtalSnapshotFullPath3?: Xtalsnapshotfullpath3;
  xtalSnapshotFullPath4?: Xtalsnapshotfullpath4;
  rotationAxis?: Rotationaxis;
  phiStart?: Phistart;
  kappaStart?: Kappastart;
  omegaStart?: Omegastart;
  resolutionAtCorner?: Resolutionatcorner;
  detector2Theta?: Detector2Theta;
  undulatorGap1?: Undulatorgap1;
  undulatorGap2?: Undulatorgap2;
  undulatorGap3?: Undulatorgap3;
  beamSizeAtSampleX?: Beamsizeatsamplex;
  beamSizeAtSampleY?: Beamsizeatsampley;
  centeringMethod?: Centeringmethod;
  averageTemperature?: Averagetemperature;
  actualCenteringPosition?: Actualcenteringposition;
  beamShape?: Beamshape;
  flux?: Flux;
  flux_end?: FluxEnd;
  totalAbsorbedDose?: Totalabsorbeddose;
  bestWilsonPlotPath?: Bestwilsonplotpath;
  imageQualityIndicatorsPlotPath?: Imagequalityindicatorsplotpath;
  imageQualityIndicatorsCSVPath?: Imagequalityindicatorscsvpath;
  blSampleId?: Blsampleid;
  sessionId?: Sessionid;
  experimentType?: Experimenttype;
  crystalClass?: Crystalclass;
  chiStart?: Chistart;
  detectorMode?: Detectormode;
  actualSampleBarcode?: Actualsamplebarcode;
  actualSampleSlotInContainer?: Actualsampleslotincontainer;
  actualContainerBarcode?: Actualcontainerbarcode;
  actualContainerSlotInSC?: Actualcontainerslotinsc;
  positionId?: Positionid;
  focalSpotSizeAtSampleX?: Focalspotsizeatsamplex;
  polarisation?: Polarisation;
  focalSpotSizeAtSampleY?: Focalspotsizeatsampley;
  apertureId?: Apertureid;
  screeningOrigId?: Screeningorigid;
  processedDataFile?: Processeddatafile;
  datFullPath?: Datfullpath;
  magnification?: Magnification;
  binning?: Binning;
  particleDiameter?: Particlediameter;
  boxSize_CTF?: BoxsizeCtf;
  minResolution?: Minresolution;
  minDefocus?: Mindefocus;
  maxDefocus?: Maxdefocus;
  defocusStepSize?: Defocusstepsize;
  amountAstigmatism?: Amountastigmatism;
  extractSize?: Extractsize;
  bgRadius?: Bgradius;
  voltage?: Voltage;
  objAperture?: Objaperture;
  c1aperture?: C1Aperture;
  c2aperture?: C2Aperture;
  c3aperture?: C3Aperture;
  c1lens?: C1Lens;
  c2lens?: C2Lens;
  c3lens?: C3Lens;
  DataCollectionGroup: DataCollectionGroup;
  Detector?: Detector;
}
export interface DataCollectionGroup {
  dataCollectionGroupId: Datacollectiongroupid1;
  blSampleId?: Blsampleid1;
  sessionId: Sessionid1;
  workflowId?: Workflowid;
  experimentType?: Experimenttype1;
  startTime?: Starttime1;
  endTime?: Endtime1;
  crystalClass?: Crystalclass1;
  comments?: Comments1;
  detectorMode?: Detectormode1;
  actualSampleBarcode?: Actualsamplebarcode1;
  actualSampleSlotInContainer?: Actualsampleslotincontainer1;
  actualContainerBarcode?: Actualcontainerbarcode1;
  actualContainerSlotInSC?: Actualcontainerslotinsc1;
  xtalSnapshotFullPath?: Xtalsnapshotfullpath;
}
export interface Detector {
  detectorId: Detectorid1;
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
  detectorMode?: Detectormode2;
  detectorMaxResolution?: Detectormaxresolution;
  detectorMinResolution?: Detectorminresolution;
  CS?: Cs;
  density?: Density;
  composition?: Composition;
  localName?: Localname;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withSSXDataCollectionResponse<TBase extends Constructor>(Base: TBase) {
  return class WithSSXDataCollectionResponse extends Base {
    ssxDataCollectionId: Ssxdatacollectionid;
    dataCollectionId: Datacollectionid;
    repetitionRate?: Repetitionrate;
    energyBandwidth?: Energybandwidth;
    monoStripe?: Monostripe;
    jetSpeed?: Jetspeed;
    chipPattern?: Chippattern;
    chipModel?: Chipmodel;
    reactionDuration?: Reactionduration;
    DataCollection: DataCollectionResponse;
  }
}
export function withDataCollectionResponse<TBase extends Constructor>(Base: TBase) {
  return class WithDataCollectionResponse extends Base {
    dataCollectionId: Datacollectionid1;
    dataCollectionGroupId: Datacollectiongroupid;
    strategySubWedgeOrigId?: Strategysubwedgeorigid;
    detectorId?: Detectorid;
    blSubSampleId?: Blsubsampleid;
    startPositionId?: Startpositionid;
    endPositionId?: Endpositionid;
    dataCollectionNumber?: Datacollectionnumber;
    startTime?: Starttime;
    endTime?: Endtime;
    runStatus?: Runstatus;
    axisStart?: Axisstart;
    axisEnd?: Axisend;
    axisRange?: Axisrange;
    overlap?: Overlap;
    numberOfImages?: Numberofimages;
    startImageNumber?: Startimagenumber;
    numberOfPasses?: Numberofpasses;
    exposureTime?: Exposuretime;
    imageDirectory?: Imagedirectory;
    imagePrefix?: Imageprefix;
    imageSuffix?: Imagesuffix;
    imageContainerSubPath?: Imagecontainersubpath;
    fileTemplate?: Filetemplate;
    wavelength?: Wavelength;
    resolution?: Resolution;
    detectorDistance?: Detectordistance;
    xBeam?: Xbeam;
    yBeam?: Ybeam;
    xBeamPix?: Xbeampix;
    yBeamPix?: Ybeampix;
    comments?: Comments;
    printableForReport?: Printableforreport;
    slitGapVertical?: Slitgapvertical;
    slitGapHorizontal?: Slitgaphorizontal;
    transmission?: Transmission;
    synchrotronMode?: Synchrotronmode;
    xtalSnapshotFullPath1?: Xtalsnapshotfullpath1;
    xtalSnapshotFullPath2?: Xtalsnapshotfullpath2;
    xtalSnapshotFullPath3?: Xtalsnapshotfullpath3;
    xtalSnapshotFullPath4?: Xtalsnapshotfullpath4;
    rotationAxis?: Rotationaxis;
    phiStart?: Phistart;
    kappaStart?: Kappastart;
    omegaStart?: Omegastart;
    resolutionAtCorner?: Resolutionatcorner;
    detector2Theta?: Detector2Theta;
    undulatorGap1?: Undulatorgap1;
    undulatorGap2?: Undulatorgap2;
    undulatorGap3?: Undulatorgap3;
    beamSizeAtSampleX?: Beamsizeatsamplex;
    beamSizeAtSampleY?: Beamsizeatsampley;
    centeringMethod?: Centeringmethod;
    averageTemperature?: Averagetemperature;
    actualCenteringPosition?: Actualcenteringposition;
    beamShape?: Beamshape;
    flux?: Flux;
    flux_end?: FluxEnd;
    totalAbsorbedDose?: Totalabsorbeddose;
    bestWilsonPlotPath?: Bestwilsonplotpath;
    imageQualityIndicatorsPlotPath?: Imagequalityindicatorsplotpath;
    imageQualityIndicatorsCSVPath?: Imagequalityindicatorscsvpath;
    blSampleId?: Blsampleid;
    sessionId?: Sessionid;
    experimentType?: Experimenttype;
    crystalClass?: Crystalclass;
    chiStart?: Chistart;
    detectorMode?: Detectormode;
    actualSampleBarcode?: Actualsamplebarcode;
    actualSampleSlotInContainer?: Actualsampleslotincontainer;
    actualContainerBarcode?: Actualcontainerbarcode;
    actualContainerSlotInSC?: Actualcontainerslotinsc;
    positionId?: Positionid;
    focalSpotSizeAtSampleX?: Focalspotsizeatsamplex;
    polarisation?: Polarisation;
    focalSpotSizeAtSampleY?: Focalspotsizeatsampley;
    apertureId?: Apertureid;
    screeningOrigId?: Screeningorigid;
    processedDataFile?: Processeddatafile;
    datFullPath?: Datfullpath;
    magnification?: Magnification;
    binning?: Binning;
    particleDiameter?: Particlediameter;
    boxSize_CTF?: BoxsizeCtf;
    minResolution?: Minresolution;
    minDefocus?: Mindefocus;
    maxDefocus?: Maxdefocus;
    defocusStepSize?: Defocusstepsize;
    amountAstigmatism?: Amountastigmatism;
    extractSize?: Extractsize;
    bgRadius?: Bgradius;
    voltage?: Voltage;
    objAperture?: Objaperture;
    c1aperture?: C1Aperture;
    c2aperture?: C2Aperture;
    c3aperture?: C3Aperture;
    c1lens?: C1Lens;
    c2lens?: C2Lens;
    c3lens?: C3Lens;
    DataCollectionGroup: DataCollectionGroup;
    Detector?: Detector;
  }
}
export function withDataCollectionGroup<TBase extends Constructor>(Base: TBase) {
  return class WithDataCollectionGroup extends Base {
    dataCollectionGroupId: Datacollectiongroupid1;
    blSampleId?: Blsampleid1;
    sessionId: Sessionid1;
    workflowId?: Workflowid;
    experimentType?: Experimenttype1;
    startTime?: Starttime1;
    endTime?: Endtime1;
    crystalClass?: Crystalclass1;
    comments?: Comments1;
    detectorMode?: Detectormode1;
    actualSampleBarcode?: Actualsamplebarcode1;
    actualSampleSlotInContainer?: Actualsampleslotincontainer1;
    actualContainerBarcode?: Actualcontainerbarcode1;
    actualContainerSlotInSC?: Actualcontainerslotinsc1;
    xtalSnapshotFullPath?: Xtalsnapshotfullpath;
  }
}
export function withDetector<TBase extends Constructor>(Base: TBase) {
  return class WithDetector extends Base {
    detectorId: Detectorid1;
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
    detectorMode?: Detectormode2;
    detectorMaxResolution?: Detectormaxresolution;
    detectorMinResolution?: Detectorminresolution;
    CS?: Cs;
    density?: Density;
    composition?: Composition;
    localName?: Localname;
  }
}