import type {
  BreadcrumbComponentType,
  BreadcrumbMatch,
} from 'use-react-router-breadcrumbs';
import SessionStats from 'components/Stats/SessionStats';

const SessionBreadCrumb: BreadcrumbComponentType<'session'> = ({ match }) => {
  return <>{match.params.session}</>;
};

const StatsRoutes = {
  path: 'stats',
  children: [
    {
      path: ':sessionId',
      element: <SessionStats />,
      titleBreadcrumb: ({ match }: { match: BreadcrumbMatch<string> }) =>
        match.params.session,
      breadcrumb: SessionBreadCrumb,
    },
  ],
};

export default StatsRoutes;
