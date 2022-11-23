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
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link
          as={Link}
          active={
            location.pathname ===
            `/legacy/proposals/${proposalName}/EM/${sessionId}`
          }
          to={`/legacy/proposals/${proposalName}/EM/${sessionId}`}
        >
          Summary
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          active={
            location.pathname ===
            `/legacy/proposals/${proposalName}/EM/${sessionId}/statistics`
          }
          to={`/legacy/proposals/${proposalName}/EM/${sessionId}/statistics`}
        >
          Statistics
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          active={
            location.pathname ===
            `/legacy/proposals/${proposalName}/EM/${sessionId}/classification`
          }
          to={`/legacy/proposals/${proposalName}/EM/${sessionId}/classification`}
        >
          2D Classification
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
