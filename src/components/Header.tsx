import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useController } from 'rest-hooks';
import { Navbar, NavDropdown, Container, Nav, Button } from 'react-bootstrap';
import { PersonBadge } from 'react-bootstrap-icons';

import { useAuth } from 'hooks/useAuth';
import { useProposal } from 'hooks/useProposal';
import { useCurrentUser } from 'hooks/useCurrentUser';
import AuthErrorBoundary from './AuthErrorBoundary';

function PersonName() {
  const currentUser = useCurrentUser();
  return <>{currentUser?.givenName}</>;
}

function Person() {
  return (
    <>
      <PersonBadge className="me-1" />
      <AuthErrorBoundary>
        <Suspense fallback={<span>...</span>}>
          <PersonName />
        </Suspense>
      </AuthErrorBoundary>
    </>
  );
}

function Logout() {
  const navigate = useNavigate();
  const { clearToken } = useAuth();
  const { clearProposal } = useProposal();
  const { resetEntireStore } = useController();
  return (
    <Button
      onClick={() => {
        clearToken();
        clearProposal();
        resetEntireStore();
        navigate('/login', { state: { from: '/home' } });
      }}
    >
      Logout
    </Button>
  );
}

export default function Header() {
  const { isAuthenticated } = useAuth();
  const { proposalName } = useProposal();

  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="md"
      sticky="top"
      className="main-header"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Home
        </Navbar.Brand>
        {isAuthenticated && (
          <>
            <Navbar.Toggle aria-controls="main-navbar" />
            <Navbar.Collapse id="main-navbar">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/calendar">
                  Calendar
                </Nav.Link>
                <Nav.Link as={Link} to="/proposals">
                  Proposals
                </Nav.Link>
                {!proposalName && (
                  <Nav.Item className="nav-link">No Proposal</Nav.Item>
                )}
                {proposalName && (
                  <NavDropdown title={proposalName} id="proposal-nav-dropdown">
                    <>
                      <NavDropdown.Item
                        as={Link}
                        to={`/proposals/${proposalName}/sessions`}
                      >
                        Sessions
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to={`/proposals/${proposalName}/contacts`}
                      >
                        Contacts
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to={`/proposals/${proposalName}/proteins`}
                      >
                        Proteins
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to={`/proposals/${proposalName}/samples`}
                      >
                        Samples
                      </NavDropdown.Item>
                    </>
                  </NavDropdown>
                )}
              </Nav>
              <Nav>
                <NavDropdown
                  title={<Person />}
                  id="admin-nav-dropdown"
                  align="end"
                >
                  <NavDropdown.Item as={Link} to="/proposals">
                    Fault Reports
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/">
                    Stats
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/">
                    Logistics
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/">
                    Run Overview
                  </NavDropdown.Item>
                </NavDropdown>
                <Logout />
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
}
