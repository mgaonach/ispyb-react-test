import { useRef } from 'react';
import { useNavigate } from 'react-router';
import { useController } from 'rest-hooks';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

import { LoginResource } from 'api/resources/Login';
import { useAuth } from 'hooks/useAuth';
import { AuthenticatedResource } from 'api/resources/Authenticated';

export default function CreateLogin() {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const { fetch } = useController();
  const userRef = useRef<any>();
  const passRef = useRef<any>();

  const onSubmit = () => {
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
        AuthenticatedResource.accessToken = response.token;
        navigate(`/`);
      })
      .catch((err) => {
        console.log('error', err);
      });
  };

  return (
    <Form>
      <Form.Group as={Row} className="mb-2">
        <Form.Label column>Username</Form.Label>
        <Col>
          <Form.Control type="text" placeholder="Username" ref={userRef} />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column>Password</Form.Label>
        <Col>
          <Form.Control type="password" placeholder="Password" ref={passRef} />
        </Col>
      </Form.Group>
      <Button variant="primary" onClick={onSubmit}>
        Login
      </Button>
    </Form>
  );
}
