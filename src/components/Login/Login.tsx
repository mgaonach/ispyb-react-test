import { Row, Col, Container } from 'react-bootstrap';

import { useAuth } from 'hooks/useAuth';
import Select from 'react-select';
import { SITES } from 'config/sites';
import LoginJava from './LoginJava';
import LoginPy from './LoginPy';

export default function Login() {
  const { site, setSite, siteInitialized } = useAuth();

  const options = SITES.map((site) => {
    return { label: site.name, value: site };
  });

  return (
    <Container>
      {siteInitialized && (
        <>
          <Row>
            <Col xs={12} md={4}></Col>
            <Col xs={12} md={4}>
              <h5>Please select your site</h5>
              <Select
                isSearchable={true}
                className="mb-2"
                value={{ label: site.name, value: site }}
                options={options}
                onChange={(newValue) => {
                  if (newValue) setSite(newValue.value);
                }}
              ></Select>
              <div style={{ borderTop: '1px solid gray', height: 10 }}></div>
            </Col>
          </Row>
          <Row>
            {site.javaMode ? <LoginJava></LoginJava> : <LoginPy></LoginPy>}
          </Row>
        </>
      )}
    </Container>
  );
}
