/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Xfefluorescencespectrumid = number;

export interface XFEFluorescenceSpectrum {
  xfeFluorescenceSpectrumId: Xfefluorescencespectrumid;
}

type Constructor<T = {}> = new (...args: any[]) => T;
export function withXFEFluorescenceSpectrum<TBase extends Constructor>(Base: TBase) {
  return class WithXFEFluorescenceSpectrum extends Base {
    xfeFluorescenceSpectrumId: Xfefluorescencespectrumid;
  }
}
