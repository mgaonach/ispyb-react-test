import { Suspense, CSSProperties } from 'react';
import { useRoutes } from 'react-router-dom';

import { Spinner, Container } from 'react-bootstrap';

import 'App.css';
import Header from 'components/Header';
import routes from 'routes';

function Loading() {
  return (
    <section className="loading">
      <Container className="text-center">
        <div className="m-5">
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <div className="text-primary">Loading ...</div>
        </div>
      </Container>
    </section>
  );
}

interface CustomCSS extends CSSProperties {
  '--bs-breadcrumb-divider': string;
}

function Bread() {
  return (
    <div className="breadcrumbs">
      <Container>
        <nav
          style={{ '--bs-breadcrumb-divider': "'»'" } as CustomCSS}
          aria-label="breadcrumb"
        >
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">Home</li>
            <li className="breadcrumb-item active" aria-current="page">
              Somewhere
            </li>
          </ol>
        </nav>
      </Container>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <Container className="text-center">&copy; 2022 ESRF</Container>
    </div>
  );
}

function App() {
  const routesElement = useRoutes(routes);
  return (
    <div className="App">
      <Header />
      <Bread />
      <Suspense fallback={<Loading />}>
        <section className="main-wrapper">
          <Container className="main">{routesElement}</Container>
        </section>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
