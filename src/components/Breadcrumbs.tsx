import { CSSProperties } from 'react';
import { Container } from 'react-bootstrap';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

import routes from 'routes';

interface CustomCSS extends CSSProperties {
  '--bs-breadcrumb-divider': string;
}

export default function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs(routes);

  document.title =
    'ISPyB  » ' +
    breadcrumbs.map(({ match }) => match.route?.breadcrumb).join(' » ');

  return (
    <div className="breadcrumbs">
      <Container>
        <nav
          style={{ '--bs-breadcrumb-divider': "'»'" } as CustomCSS}
          aria-label="breadcrumb"
        >
          <ol className="breadcrumb mb-0">
            {breadcrumbs.map(({ breadcrumb }, bid) => (
              <li
                key={`bread-${bid}`}
                className="breadcrumb-item"
                aria-current="page"
              >
                {breadcrumb}
              </li>
            ))}
          </ol>
        </nav>
      </Container>
    </div>
  );
}
