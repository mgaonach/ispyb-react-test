import React, { Suspense } from 'react';
import { useResource } from '@rest-hooks/core';
import { getImage } from '@rest-hooks/img';
import { useInView } from 'react-intersection-observer';
import { Spinner } from 'react-bootstrap';
import { Image } from 'react-bootstrap-icons';

import config from 'config/config';

type Props<
  C extends
    | keyof JSX.IntrinsicElements
    | React.JSXElementConstructor<{ src: string }> = 'img'
> = React.ComponentProps<C> & { component: C };

export function Img<
  C extends
    | keyof JSX.IntrinsicElements
    | React.JSXElementConstructor<any> = 'img'
>(props: Props<C>): React.ReactElement {
  const { component, ...rest } = props;
  const source = `${config.baseUrl}${rest.src}`;
  useResource(getImage, source ? { src: source } : null);
  return React.createElement(component, { ...rest, src: source });
}
Img.defaultProps = {
  component: 'img',
};

function Loading() {
  return (
    <Spinner animation="border" role="status" variant="primary">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export const LazyImage = (props: any) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return inView ? (
    <Suspense fallback={<Loading />}>
      <Img {...props} ref={ref} />
    </Suspense>
  ) : (
    <div ref={ref}>
      <Image />
    </div>
  );
};
