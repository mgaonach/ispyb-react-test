import { Suspense, CSSProperties } from 'react';
import { useRoutes } from 'react-router-dom';
import { Spinner, Container, ProgressBar } from 'react-bootstrap';

import 'App.css';
import Header from 'components/Header';
import routes from 'routes';

import { useAuth } from 'hooks/useAuth';

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

function Bread({ pending }: { pending: boolean }) {
  return (
    <>
      <div className="bg-primary">
        {pending && (
          <ProgressBar
            animated
            now={100}
            className="rounded-0"
            style={{ height: 5 }}
          />
        )}
        {!pending && (
          <ProgressBar className="rounded-0 bg-primary" style={{ height: 5 }} />
        )}
      </div>
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
    </>
  );
}

function Footer() {
  return (
    <div className="footer">
      <Container className="text-center">&copy; 2022 ESRF</Container>
    </div>
  );
}

function App({ pending }: { pending: boolean }) {
  const { restoreToken } = useAuth();
  restoreToken();

  const routesElement = useRoutes(routes);
  return (
    <div className="App">
      <Header />
      <Bread pending={pending} />
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
