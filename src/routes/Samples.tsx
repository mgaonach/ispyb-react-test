import React from 'react';

const SamplesList = React.lazy(() =>
  import('components/Samples' /* webpackChunkName: "samples" */).then((m) => ({
    default: m.SamplesList,
  }))
);

const ViewSample = React.lazy(() =>
  import('components/Samples').then((m) => ({
    default: m.ViewSample,
  }))
);

const SampleRoutes = {
  path: 'samples',
  children: [
    { index: true, element: <SamplesList /> },
    { path: ':blSampleId', element: <ViewSample /> },
  ],
};

export default SampleRoutes;
