import SamplesList from 'components/Samples/SamplesList';
import ViewSample from 'components/Samples/ViewSample';

const SampleRoutes = {
  path: 'samples',
  children: [
    { index: true, element: <SamplesList /> },
    { path: ':blSampleId', element: <ViewSample /> },
  ],
};

export default SampleRoutes;
