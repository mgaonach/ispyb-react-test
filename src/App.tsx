import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import 'App.css';
import Header from 'components/Header';
import routes from 'routes';

function Loading() {
  return <div>Loading...</div>;
}

function App() {
  const routesElement = useRoutes(routes);
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<Loading />}>
        <section className="App-wrapper">{routesElement}</section>
      </Suspense>
    </div>
  );
}

export default App;
