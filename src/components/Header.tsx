import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useController } from 'rest-hooks';
import { Navbar, NavDropdown, Container, Nav, Button } from 'react-bootstrap';
import { PersonBadge } from 'react-bootstrap-icons';

import { useAuth } from 'hooks/useAuth';
import { useProposal } from 'hooks/useProposal';
import { useCurrentUser } from 'hooks/useCurrentUser';
import AuthErrorBoundary from './AuthErrorBoundary';
import { JavaHeader } from 'legacy/components/Header';

function PersonMenu() {
  const currentUser = useCurrentUser();
  return (
    <NavDropdown
      title={
        <>
          <PersonBadge className="me-1" />
          {currentUser.givenName}
        </>
      }
      id="admin-nav-dropdown"
      align="end"
    >
      <NavDropdown.Header>
        {currentUser.givenName} {currentUser.familyName}
      </NavDropdown.Header>
      <AdminMenu />
      <BeamlineMenu />
    </NavDropdown>
  );
}

export function Logout() {
  const { clearToken } = useAuth();
  const { clearProposal } = useProposal();
  const { resetEntireStore } = useController();
  return (
    <Button
      onClick={() => {
        clearToken();
        clearProposal();
        resetEntireStore();
      }}
    >
      Logout
    </Button>
  );
}

function AdminMenu() {
  const currentUser = useCurrentUser();
  const adminPermissions = ['manage_options', 'manage_groups'];
  const userAdminPermissions = adminPermissions.filter((adminPermission) =>
    currentUser.Permissions.includes(adminPermission)
  );
  return (
    <>
      {userAdminPermissions.length > 0 && (
        <>
          <NavDropdown.Divider />
          <NavDropdown.Header>Administration</NavDropdown.Header>
          {currentUser.Permissions.includes('manage_options') && (
            <NavDropdown.Item as={Link} to={`/admin/options`}>
              Manage Options
            </NavDropdown.Item>
          )}
        </>
      )}
    </>
  );
}

function BeamlineMenu() {
  const currentUser = useCurrentUser();
  return (
    <>
      {currentUser.beamLines.length > 0 && (
        <>
          <NavDropdown.Divider />
          <NavDropdown.Header>My Beamlines</NavDropdown.Header>
          {currentUser.beamLines.map((beamLine) => (
            <NavDropdown.Item as={Link} to={`/beamline/${beamLine}`}>
              {beamLine}
            </NavDropdown.Item>
          ))}
        </>
      )}
    </>
  );
}

export default function Header() {
  const { isAuthenticated, site } = useAuth();

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
        {isAuthenticated && !site.javaMode && <PyHeader />}
        {isAuthenticated && site.javaMode && <JavaHeader />}
      </Container>
    </Navbar>
  );
}

function PyHeader() {
  const { proposalName } = useProposal();

  return (
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
            <Nav.Link className="nav-link" eventKey="disabled" disabled>
              No Proposal
            </Nav.Link>
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
                  to={`/proposals/${proposalName}/shipments`}
                >
                  Shipments
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
          <AuthErrorBoundary>
            <Suspense fallback={<span>...</span>}>
              <PersonMenu />
            </Suspense>
          </AuthErrorBoundary>
          <Logout />
        </Nav>
      </Navbar.Collapse>
    </>
  );
}
