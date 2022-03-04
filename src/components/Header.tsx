import { Link } from 'react-router-dom';
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap';
import { PersonBadge } from 'react-bootstrap-icons';

export default function Header() {
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
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/proposals">
              Calendar
            </Nav.Link>
            <Nav.Link as={Link} to="/proposals">
              Proposals
            </Nav.Link>
            <NavDropdown title="No Proposal" id="proposal-nav-dropdown">
              <NavDropdown.Item as={Link} to="/contacts">
                Contacts
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/samples">
                Samples
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/events">
                Events
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown
              title={
                <>
                  <PersonBadge className="me-1" />
                  Admin
                </>
              }
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
