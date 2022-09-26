import ContactRoutes from './Contacts';
import EventsRoutes from './Events';
import { SessionRoutes } from './Proposals';
import SampleRoutes from './Samples';

const ProposalRoutes = {
  path: 'proposals/:proposal',
  children: [SessionRoutes, SampleRoutes, ContactRoutes, EventsRoutes],
};

export default ProposalRoutes;
