import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { useProposal } from 'hooks/useProposal';
import { Logout } from 'components/Header';

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
          <Logout />
        </Nav>
      </Navbar.Collapse>
    </>
  );
}
