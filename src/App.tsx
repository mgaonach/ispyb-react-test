import { Suspense, CSSProperties } from 'react';
import { useRoutes } from 'react-router-dom';
import { NetworkErrorBoundary, NetworkError } from 'rest-hooks';
import { Spinner, Container } from 'react-bootstrap';

import 'App.css';
import Header from 'components/Header';
import { useAuth } from 'hooks/useAuth';
import routes from 'routes';
import { AuthenticatedResource } from 'api/resources/Authenticated';

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

function AuthErrorBoundary({ error }: { error: NetworkError }) {
  return error.status === 401 ? (
    <span>Unauthenticated</span>
  ) : (
    <span>An error occured: {error.message}</span>
  );
}

function App() {
  const { token } = useAuth();
  if (token) {
    console.log('restoring token');
    AuthenticatedResource.accessToken = token;
  }

  const routesElement = useRoutes(routes(!!token));
  return (
    <div className="App">
      <Header />
      <Bread />
      <Suspense fallback={<Loading />}>
        <section className="main-wrapper">
          <Container className="main">
            <NetworkErrorBoundary fallbackComponent={AuthErrorBoundary}>
              {routesElement}
            </NetworkErrorBoundary>
          </Container>
        </section>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
