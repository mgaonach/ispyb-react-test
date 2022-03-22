import type { RouteObject } from 'react-router-dom';
import SampleRoutes from 'routes/Samples';
import EventsRoutes from 'routes/Events';
import ContactRoutes from 'routes/Contacts';
import Login from 'components/Login';

function Home() {
  return <div>Home</div>;
}

function NotFound() {
  return <div>Cant find that page: 404</div>;
}

const routes = (isAuthenticated: boolean) => [
  {
    path: '/',
    children: [
      { index: true, element: <Home /> },
      SampleRoutes,
      EventsRoutes,
      ContactRoutes,
      { path: 'login', element: <Login /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];

export default routes;
