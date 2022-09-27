import type {
  BreadcrumbComponentType,
  BreadcrumbMatch,
} from 'use-react-router-breadcrumbs';
import EventsList from 'components/Events/EventsList';

const SessionBreadCrumb: BreadcrumbComponentType<'session'> = ({ match }) => {
  return <>{match.params.session}</>;
};

const EventsRoutes = {
  path: 'sessions',
  children: [
    {
      index: true,
      element: <EventsList refresh />,
      breadcrumb: 'Data Collections',
    },
    {
      path: ':session',
      element: <EventsList refresh />,
      titleBreadcrumb: ({ match }: { match: BreadcrumbMatch<string> }) =>
        match.params.session,
      breadcrumb: SessionBreadCrumb,
    },
  ],
};

export default EventsRoutes;
