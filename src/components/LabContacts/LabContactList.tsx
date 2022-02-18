import { useResource } from 'rest-hooks';

import { Link, useNavigate } from 'react-router-dom';

import Table from 'components/Layout/Table';
import { LabContactResource } from 'api/resources/LabContact';

function personFormatter(row: any) {
  return `${row.Person.givenName} ${row.Person.familyName}`;
}

export default function LabContactList({ sortBy }: { sortBy?: string }) {
  const navigate = useNavigate();
  const contacts = useResource(LabContactResource.list(), { sortBy });

  const onRowClick = (row: any) => {
    navigate(`/contacts/view/${row.labContactId}`);
  };

  return (
    <section>
      <Link to="/contacts/new">New</Link>
      <Table
        onRowClick={onRowClick}
        keyId="labContactId"
        results={contacts.results}
        columns={[
          { label: 'Card Name', key: 'cardName' },
          { label: 'Date', key: 'recordTimeStamp' },
          {
            label: 'Contact Person',
            key: 'person',
            formatter: personFormatter,
          },
        ]}
      />
      <span>Total: {contacts.total}</span>
    </section>
  );
}
