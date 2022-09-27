import type {
  BreadcrumbComponentType,
  BreadcrumbMatch,
} from 'use-react-router-breadcrumbs';

import ContactRoutes from './Contacts';
import EventsRoutes from './Events';
import { SessionRoutes } from './Proposals';
import SampleRoutes from './Samples';

const ProposalBreadCrumb: BreadcrumbComponentType<'proposal'> = ({ match }) => {
  return <>{match.params.proposal}</>;
};

const ProposalRoutes = {
  path: 'proposals/:proposal',
  breadcrumb: ProposalBreadCrumb,
  titleBreadcrumb: ({ match }: { match: BreadcrumbMatch<string> }) =>
    match.params.proposal,
  children: [SessionRoutes, SampleRoutes, ContactRoutes, EventsRoutes],
};

export default ProposalRoutes;
