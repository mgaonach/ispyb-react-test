import {
  BreadcrumbsRoute,
  BreadcrumbMatch,
} from 'use-react-router-breadcrumbs';

import { ProposalsRoutes } from 'routes/Proposals';
import ProposalRoutes from 'routes/Proposal';
import AdminRoutes from 'routes/Admin';
import BeamLineRoutes from 'routes/BeamLine';

import PrivateRoute from 'components/PrivateRoute';
import Home from 'components/Home';
import Calendar from 'components/Calendar';

export interface TitledBreadcrumbsRoute extends BreadcrumbsRoute {
  titleBreadcrumb?: ({ match }: { match: BreadcrumbMatch<string> }) => string;
}

function NotFound() {
  return <div>Cant find that page: 404</div>;
}

const routes: TitledBreadcrumbsRoute[] = [
  {
    path: '/',
    children: [
      {
        element: <PrivateRoute />,
        children: [
          { index: true, element: <Home />, breadcrumb: 'Home' },
          { path: 'calendar', element: <Calendar />, breadcrumb: 'Calendar' },
          ProposalsRoutes,
          ProposalRoutes,
          BeamLineRoutes,
          AdminRoutes,
        ],
      },
      { path: '*', element: <NotFound /> },
    ],
  },
];

export default routes;
