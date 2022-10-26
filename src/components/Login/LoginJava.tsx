import { useRef, useState, useEffect } from 'react';
import {
  Form,
  Button,
  Row,
  Col,
  Container,
  Alert,
  Spinner,
} from 'react-bootstrap';

import { useAuth } from 'hooks/useAuth';

export default function LoginJava() {
  const [error, setError] = useState<string>('');
  const [pending, setPending] = useState<boolean>(false);
  const [validated, setValidated] = useState<boolean>(false);
  const userRef = useRef<any>();
  const passRef = useRef<any>();

  useEffect(() => {
    userRef.current?.focus();
  }, [userRef]);

  return (
    <Container>
      <Row>
        <Col xs={12} md={4}></Col>
        <Col xs={12} md={4}>
          <Form validated={validated}>
            {error && (
              <Row>
                <Col>
                  <Alert variant="danger">{error}</Alert>
                </Col>
              </Row>
            )}
            <Form.Group as={Row} className="mb-2">
              <Form.Label column>Username JAVA</Form.Label>
              <Col md={12} lg={8}>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  ref={userRef}
                  disabled={pending}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
              <Form.Label column>Password</Form.Label>
              <Col md={12} lg={8}>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  ref={passRef}
                  disabled={pending}
                  required
                />
              </Col>
            </Form.Group>

            <div className="d-grid gap-2 mt-2">
              <Button variant="primary" type="submit" disabled={pending}>
                {!pending && <>Login</>}
                {pending && (
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                )}
              </Button>
            </div>
          </Form>
        </Col>
        <Col xs={12} md={4}></Col>
      </Row>
    </Container>
  );
}
