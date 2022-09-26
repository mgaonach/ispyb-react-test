import { useSuspense } from 'rest-hooks';
import { useNavigate } from 'react-router-dom';

import Table from 'components/Layout/Table';
import { ProposalResource } from 'api/resources/Proposal';
import { Proposal } from 'models/Proposal';
import { useProposal } from 'hooks/useProposal';

export default function ProposalsList({ sortBy }: { sortBy?: string }) {
  const navigate = useNavigate();
  const proposals = useSuspense(ProposalResource.list(), {
    skip: 0,
    limit: 10,
  });
  const { setProposalName } = useProposal();

  const onRowClick = (row: Proposal) => {
    setProposalName(row.proposal);
    navigate(`/proposals/${row.proposal}/sessions`);
  };

  return (
    <section>
      <Table
        keyId="proposalId"
        results={proposals.results}
        onRowClick={onRowClick}
        paginator={{
          total: proposals.total,
          skip: proposals.skip,
          limit: proposals.limit,
        }}
        columns={[
          { label: 'Proposal', key: 'proposal' },
          { label: 'Title', key: 'title' },
          { label: 'State', key: 'state' },
          { label: '# Sessions', key: '_metadata.sessions' },
        ]}
      />
    </section>
  );
}
