import { BreadcrumbsRoute } from 'use-react-router-breadcrumbs';

import { ProposalsRoutes } from 'routes/Proposals';
import ProposalRoutes from 'routes/Proposal';
import Login from 'components/Login';
import PrivateRoute from 'components/PrivateRoute';
import Home from 'components/Home';
import Calendar from 'components/Calendar';

function NotFound() {
  return <div>Cant find that page: 404</div>;
}

const routes: BreadcrumbsRoute[] = [
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
        ],
      },

      { path: 'login', element: <Login /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];

export default routes;
