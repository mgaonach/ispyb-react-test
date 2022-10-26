export interface SiteConfig {
  name: string;
  host: string;
  apiPrefix: string;
  javaMode?: boolean;
  javaConfig?: JavaSiteConfig;
  javaName?: string;
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
    javaName: 'ESRF',
    host: 'https://ispyb.esrf.fr',
    apiPrefix: '/ispyb/ispyb-ws/rest',
    javaMode: true,
  },
];
