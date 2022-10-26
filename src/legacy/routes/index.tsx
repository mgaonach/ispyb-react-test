import ProposalSessionsPage from 'legacy/pages/proposalsessionspage';
import ProposalsPage from 'legacy/pages/proposalspage';
import SessionsPage from 'legacy/pages/sessionspage';
import { TitledBreadcrumbsRoute } from 'routes';
import {
  BreadcrumbComponentType,
  BreadcrumbMatch,
} from 'use-react-router-breadcrumbs';

const ProposalBreadCrumb: BreadcrumbComponentType<'proposalName'> = ({
  match,
}) => {
  return <>{match.params.proposalName}</>;
};

const javaRoutes: TitledBreadcrumbsRoute[] = [
  { index: true, element: <SessionsPage />, breadcrumb: null },
  { path: 'sessions', element: <SessionsPage />, breadcrumb: 'Sessions' },
  { path: 'proposals', element: <ProposalsPage />, breadcrumb: 'Proposals' },
  {
    path: 'proposals/:proposalName',
    breadcrumb: ProposalBreadCrumb,
    titleBreadcrumb: ({ match }: { match: BreadcrumbMatch<string> }) => {
      return match.params.proposalName || '';
    },
    children: [
      {
        path: 'sessions',
        children: [
          {
            index: true,
            element: <ProposalSessionsPage />,
            breadcrumb: 'Sessions',
          },
        ],
      },
    ],
  },
];

export default javaRoutes;
