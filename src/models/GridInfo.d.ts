/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

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

type Constructor<T = {}> = new (...args: any[]) => T;
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
