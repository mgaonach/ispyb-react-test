import EventsList from 'components/Events/EventsList';

const EventsRoutes = {
  path: 'events',
  children: [{ index: true, element: <EventsList /> }],
};

export default EventsRoutes;
