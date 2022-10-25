export interface SiteConfig {
  name: string;
  host: string;
  apiPrefix: string;
  javaMode?: boolean;
  javaConfig?: JavaSiteConfig;
}

export interface JavaSiteConfig {
  techniques: Record<string, Beamline>;
}

export type sampleChangerType =
  | 'FlexHCDDual'
  | 'FlexHCDUnipuckPlate'
  | 'ISARA'
  | 'P11SC';

export interface Beamline {
  name: string;
  sampleChangerType?: sampleChangerType;
}

export interface Technique {
  beamlines: Array<Beamline>;
}

export const SITES: SiteConfig[] = [
  {
    name: 'ESRF-py',
    host: 'http://daiquiri.esrf.fr:8000',
    apiPrefix: '/ispyb/api/v1',
  },
  {
    name: 'ESRF-java',
    host: 'https://ispyb.esrf.fr',
    apiPrefix: '/ispyb/ispyb-ws/rest',
    javaMode: true,
  },
];
