import SessionsPage from 'legacy/pages/sessionspage';
import { TitledBreadcrumbsRoute } from 'routes';

const javaRoutes: TitledBreadcrumbsRoute[] = [
  { index: true, element: <SessionsPage />, breadcrumb: null },
  { path: 'sessions', element: <SessionsPage />, breadcrumb: 'Sessions' },
];

export default javaRoutes;
