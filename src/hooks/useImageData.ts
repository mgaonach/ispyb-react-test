import { useSuspense } from 'rest-hooks';
import config from 'config/config';
import { getXHRArrayBuffer } from 'api/resources/XHRFile';
import {
  ImageHeaderResource,
  ImageHistogramResource,
} from 'api/resources/ImageHeader';

interface IImageData {
  imageNumber: number;
  dataCollectionId?: string;
  progress?: (progress: number) => void;
  loadData?: boolean;
}

export function useImageData(props: IImageData) {
  const { imageNumber, dataCollectionId, progress, loadData } = props;
  const imageData = useSuspense(
    getXHRArrayBuffer,
    dataCollectionId && loadData
      ? {
          src: `${config.baseUrl}/data/images?dataCollectionId=${dataCollectionId}&imageNumber=${imageNumber}`,
          ...(progress ? { progress } : null),
        }
      : null
  );

  const imageHeader = useSuspense(ImageHeaderResource.list(), {
    dataCollectionId,
    imageNumber,
  });

  const imageHistogram = useSuspense(ImageHistogramResource.list(), {
    dataCollectionId,
    imageNumber,
  });

  return {
    imageData,
    imageHeader,
    imageHistogram,
  };
}
