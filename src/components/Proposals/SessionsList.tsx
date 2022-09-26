import { useSuspense } from 'rest-hooks';
import { useNavigate } from 'react-router-dom';

import Table from 'components/Layout/Table';
import { SessionResource } from 'api/resources/Session';
import { Session } from 'models/Session';
import { usePath } from 'hooks/usePath';
import { Badge } from 'react-bootstrap';

export default function SessionList({ sortBy }: { sortBy?: string }) {
  const navigate = useNavigate();
  const proposal = usePath('proposal');
  const sessions = useSuspense(SessionResource.list(), {
    skip: 0,
    limit: 10,
    ...(proposal ? { proposal } : {}),
  });

  const onRowClick = (row: Session) => {
    navigate(`/proposals/${proposal}/sessions/${row.session}`);
  };

  return (
    <section>
      <h1>Sessions</h1>
      <Table
        keyId="sessionId"
        results={sessions.results}
        onRowClick={onRowClick}
        paginator={{
          total: sessions.total,
          skip: sessions.skip,
          limit: sessions.limit,
        }}
        columns={[
          { label: 'Session', key: 'session' },
          { label: 'Start', key: 'startDate' },
          { label: 'End', key: 'endDate' },
          { label: 'Beamline', key: 'beamLineName' },
          {
            label: 'Type',
            key: 'Type',
            formatter: (row: Session) =>
              row.SessionType.map((sessionType) => sessionType.typeName).join(
                ','
              ),
          },
          { label: '# DCs', key: '_metadata.datacollections' },
          {
            label: 'Active',
            key: 'active',
            formatter: (row: Session) =>
              row._metadata.active ? <Badge bg="success">Active</Badge> : null,
          },
        ]}
        emptyText="No sessions yet"
      />
    </section>
  );
}
