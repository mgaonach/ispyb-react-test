import { useRef, useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useController } from 'rest-hooks';
import { Form, Button, Row, Col, Container, Alert } from 'react-bootstrap';

import { LoginResource } from 'api/resources/Login';
import { useAuth } from 'hooks/useAuth';
import { LocationState } from 'components/PrivateRoute';

export default function Login() {
  const [error, setError] = useState('');
  const location = useLocation();
  const { from } = location.state as LocationState;
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const { fetch } = useController();
  const userRef = useRef<any>();
  const passRef = useRef<any>();

  const onSubmit = useCallback(() => {
    setError('');
    fetch(
      LoginResource.create(),
      {},
      {
        plugin: 'dummy',
        username: userRef.current?.value,
        password: passRef.current?.value,
      }
    )
      .then((response) => {
        console.log('login', response);
        setToken(response.token);
        navigate(from ? from : '/');
      })
      .catch((err) => {
        err.response.json().then((json: any) => {
          setError(json.message);
          console.log('error', err, json);
        });
      });
  }, [setToken, navigate, fetch, from]);

  return (
    <Container>
      <Row>
        <Col xs={12} md={4}></Col>
        <Col xs={12} md={4}>
          <Form>
            {error && (
              <Row>
                <Col>
                  <Alert variant="danger">{error}</Alert>
                </Col>
              </Row>
            )}
            <Form.Group as={Row} className="mb-2">
              <Form.Label column>Username</Form.Label>
              <Col xs={12} md={8}>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  ref={userRef}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column>Password</Form.Label>
              <Col xs={12} md={8}>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  ref={passRef}
                />
              </Col>
            </Form.Group>
            <div className="d-grid gap-2 mt-2">
              <Button variant="primary" onClick={onSubmit}>
                Login
              </Button>
            </div>
          </Form>
        </Col>
        <Col xs={12} md={4}></Col>
      </Row>
    </Container>
  );
}
