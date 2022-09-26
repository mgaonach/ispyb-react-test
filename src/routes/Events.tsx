import EventsList from 'components/Events/EventsList';

const EventsRoutes = {
  path: 'sessions',
  children: [
    { index: true, element: <EventsList refresh /> },
    { path: ':session', element: <EventsList refresh /> },
  ],
};

export default EventsRoutes;
