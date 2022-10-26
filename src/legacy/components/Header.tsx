import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { useProposal } from 'hooks/useProposal';
import { Logout } from 'components/Header';
import { PersonBadge } from 'react-bootstrap-icons';
import { useAuth } from 'hooks/useAuth';

export function JavaHeader() {
  const { proposalName } = useProposal();

  return (
    <>
      <Navbar.Toggle aria-controls="main-navbar" />
      <Navbar.Collapse id="main-navbar">
        <Nav className="me-auto">
          {!proposalName && (
            <Nav.Link className="nav-link" eventKey="disabled" disabled>
              No Proposal
            </Nav.Link>
          )}
          {proposalName && (
            <NavDropdown
              title={proposalName}
              id="proposal-nav-dropdown"
              children={undefined}
            ></NavDropdown>
          )}
        </Nav>

        <Nav>
          <PersonMenu />
          <Logout />
        </Nav>
      </Navbar.Collapse>
    </>
  );
}

function PersonMenu() {
  const { javaPerson } = useAuth();
  return (
    <NavDropdown
      title={
        <>
          <PersonBadge className="me-1" />
          {javaPerson?.username}
        </>
      }
      id="admin-nav-dropdown"
      align="end"
    >
      <NavDropdown.Header>{javaPerson?.roles}</NavDropdown.Header>
    </NavDropdown>
  );
}
