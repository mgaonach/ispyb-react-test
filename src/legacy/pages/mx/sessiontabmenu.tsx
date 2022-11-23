import React from 'react';
import { Nav } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';

export default function SessionTabMenu({
  proposalName,
  sessionId,
}: {
  proposalName: string | undefined;
  sessionId: string | undefined;
}) {
  const location = useLocation();

  return (
    <Nav variant="tabs" defaultActiveKey={location.pathname}>
      <Nav.Item>
        <Nav.Link
          as={Link}
          active={
            location.pathname ===
            `/legacy/proposals/${proposalName}/MX/${sessionId}`
          }
          to={`/legacy/proposals/${proposalName}/MX/${sessionId}`}
        >
          Data Collections
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          active={
            location.pathname ===
            `/legacy/proposals/${proposalName}/MX/${sessionId}/energy`
          }
          to={`/legacy/proposals/${proposalName}/MX/${sessionId}/energy`}
        >
          Energy Scans
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          active={
            location.pathname ===
            `/legacy/proposals/${proposalName}/MX/${sessionId}/xrf`
          }
          to={`/legacy/proposals/${proposalName}/MX/${sessionId}/xrf`}
        >
          Flourescence Spectra
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
