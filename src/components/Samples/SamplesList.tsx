import { useSuspense } from 'rest-hooks';
import { useNavigate } from 'react-router-dom';

import Table from 'components/Layout/Table';
import { SampleResource } from 'api/resources/Sample';
import { Sample } from 'models/Sample';
import { usePath } from 'hooks/usePath';

export default function SamplesList({ sortBy }: { sortBy?: string }) {
  const navigate = useNavigate();
  const proposal = usePath('proposal');
  const samples = useSuspense(SampleResource.list(), {
    skip: 0,
    limit: 10,
    ...(proposal ? { proposal } : {}),
  });

  const onRowClick = (row: Sample) => {
    navigate(`/proposals/${proposal}/samples/${row.blSampleId}`);
  };

  return (
    <section>
      <h1>Samples</h1>
      <Table
        keyId="blSampleId"
        results={samples.results}
        onRowClick={onRowClick}
        paginator={{
          total: samples.total,
          skip: samples.skip,
          limit: samples.limit,
        }}
        columns={[
          { label: 'Name', key: 'name' },
          { label: 'Protein', key: 'Crystal.Protein.name' },
          { label: 'Sub Samples', key: '_metadata.subsamples' },
          { label: '# DCs', key: '_metadata.datacollections' },
        ]}
        emptyText="No samples yet"
      />
    </section>
  );
}
