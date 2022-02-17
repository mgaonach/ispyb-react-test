import { useResource } from 'rest-hooks';

import Table from 'components/Layout/Table';
import { SampleResource } from 'api/resources/Sample';


export default function SamplesList({ sortBy }: { sortBy?: string }) {
  const samples = useResource(SampleResource.list(), { sortBy });

  return (
    <section>
      <Table
        keyId="blSampleId"
        results={samples.results}
        columns={[
          { label: 'Name', key: 'name' },
          { label: 'Protein', key: 'Crystal.Protein.name' },
          { label: 'Sub Samples', key: '_metadata.subsamples' },
          { label: '# DCs', key: '_metadata.datacollections' },
        ]}
      />
      <span>Total: {samples.total}</span>
    </section>
  );
}
