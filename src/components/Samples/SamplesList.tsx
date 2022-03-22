import { useResource } from 'rest-hooks';
import { useNavigate } from 'react-router-dom';

import Table from 'components/Layout/Table';
import { SampleResource } from 'api/resources/Sample';
import { Sample } from 'models/Sample';

export default function SamplesList({ sortBy }: { sortBy?: string }) {
  const navigate = useNavigate();
  const samples = useResource(SampleResource.list(), { skip: 0, limit: 10 });

  const onRowClick = (row: Sample) => {
    navigate(`/samples/${row.blSampleId}`);
  };

  return (
    <section>
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
      />
    </section>
  );
}
