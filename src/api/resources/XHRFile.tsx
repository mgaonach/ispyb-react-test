import React, { Suspense, useState } from 'react';
import { useResource } from '@rest-hooks/core';
import { Endpoint, EndpointInstance } from '@rest-hooks/endpoint';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import { Spinner } from 'react-bootstrap';
import { Image as BSImage } from 'react-bootstrap-icons';

import config from 'config/config';
import { AuthenticatedResource } from 'api/resources/Authenticated';

const emptyImage = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

function parseHeadersAsDict(headerString: string) {
  const headers: { [index: string]: string } = {};
  const lines = headerString.split(/\r\n/);
  lines.forEach((line) => {
    if (line.length > 0) {
      const matched = line.matchAll(/^(.*?):\s*(.*)$/g);
      Array.from(matched).forEach((m) => {
        const [, g1, g2] = m;
        headers[g1.toLowerCase()] = g2;
      });
    }
  });
  return headers;
}

const getXHRBlob: EndpointInstance<
  (this: EndpointInstance, { src }: { src: string }) => Promise<string>,
  string,
  undefined
> = new Endpoint(
  async function (
    this: EndpointInstance,
    { src, progress }: { src: string; progress?: (percent: number) => void }
  ): Promise<string> {
    return new Promise((resolve) => {
      // even if we polyfill, on server we don't want to actually wait to resolve the Image
      if (typeof window === 'undefined') resolve(src);

      let completedPercentage = 0;
      const xhr = new XMLHttpRequest();
      xhr.open('GET', src, true);
      if (AuthenticatedResource.accessToken)
        xhr.setRequestHeader(
          'Authorization',
          `Bearer ${AuthenticatedResource.accessToken}`
        );
      xhr.responseType = 'arraybuffer';

      xhr.onload = function (e) {
        if (xhr.status === 0 || xhr.status !== 200) {
          console.warn('XHR onLoad bad status', xhr.status);
          resolve(emptyImage);
        }

        const headers = parseHeadersAsDict(xhr.getAllResponseHeaders());
        const mimeType = headers['content-type'] || 'image/png';

        const blob = new Blob([this.response], { type: mimeType });
        // setTimeout(() => {
        resolve(window.URL.createObjectURL(blob));
        // }, 2000);
      };

      xhr.onprogress = function (e) {
        if (e.lengthComputable) {
          const percent = Math.round((e.loaded / e.total) * 100);
          if (percent !== completedPercentage) {
            if (progress) progress(percent);
          }
          completedPercentage = percent;
        }
      };

      xhr.onerror = function () {
        console.log('xhr network error');
        resolve(emptyImage);
      };

      if (progress) progress(completedPercentage);
      xhr.send();
    });
  },
  {
    key(this: EndpointInstance, { src }: { src: string }) {
      return `GET ${src}`;
    },
    schema: '',
  }
);

type Props<
  C extends
    | keyof JSX.IntrinsicElements
    | React.JSXElementConstructor<{ src: string }> = 'img'
> = React.ComponentProps<C> & { component: C };

export default function XHRTag<
  C extends
    | keyof JSX.IntrinsicElements
    | React.JSXElementConstructor<any> = 'img'
>(props: Props<C>): React.ReactElement {
  const { component, progress, src, ...rest } = props;
  // @ts-ignore
  const blob = useResource(getXHRBlob, {
    ...(src ? { src } : null),
    ...(progress ? { progress } : null),
  });
  return React.createElement(component, { src: blob, ...rest });
}
XHRTag.defaultProps = {
  component: 'img',
};

function Loading({ progress }: { progress: number }) {
  return (
    <>
      {progress >= 0 && progress <= 100 && <div>Loading ... {progress}%</div>}
      <Spinner animation="border" role="status" variant="primary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </>
  );
}

export function LazyImage(props: any) {
  const [progress, setProgress] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { src, ...rest } = props;
  const source = `${config.baseUrl}${src}`;

  return inView ? (
    <>
      <Suspense fallback={<Loading progress={progress} />}>
        <XHRTag
          src={source}
          {...rest}
          progress={(progress: number) => setProgress(progress)}
          onLoad={() => setLoaded(true)}
          className={classNames('lazy-image', { 'lazy-image-loaded': loaded })}
        />
      </Suspense>
    </>
  ) : (
    <div ref={ref}>
      <BSImage />
    </div>
  );
}

export function IFrameFile(props: any) {
  const [progress, setProgress] = useState<number>(0);
  const { src, ...rest } = props;
  const source = config.host + src;
  return (
    <Suspense fallback={<Loading progress={progress} />}>
      <XHRTag
        src={source}
        component="iframe"
        progress={(progress: number) => setProgress(progress)}
        {...rest}
      />
    </Suspense>
  );
}
