/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

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

type Constructor<T = {}> = new (...args: any[]) => T;
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
