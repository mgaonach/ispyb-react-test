import { useState } from 'react';
import { useSuspense } from 'rest-hooks';
import { Link } from 'react-router-dom';
import { Alert, Card, CardGroup } from 'react-bootstrap';
import classNames from 'classnames';

import { SessionResource, SessionGroupResource } from 'api/resources/Session';
import { useCurrentUser } from 'hooks/useCurrentUser';
import NetworkErrorPage from 'components/NetworkErrorPage';
import { useUIOptions } from 'hooks/useUIOptions';

interface ISessionRow {
  upcoming?: boolean;
  previous?: boolean;
  commissioning?: boolean;
  beamlineGroup?: string;
}

function SessionRow(props: ISessionRow) {
  const { upcoming, previous, commissioning, beamlineGroup } = props;

  const resource = beamlineGroup ? SessionGroupResource : SessionResource;
  const sessions = useSuspense(resource.list(), {
    ...(upcoming ? { upcoming: true } : {}),
    ...(previous ? { previous: true } : {}),
    ...(commissioning ? { sessionType: 'commissioning' } : {}),
    ...(beamlineGroup ? { beamlineGroup } : {}),
  });

  return (
    <CardGroup>
      {sessions.results.map((session) => (
        <Card
          key={session.session}
          className={classNames({ 'session-active': session._metadata.active })}
        >
          <Card.Header>
            <span>{session.beamLineName}</span>.
            <span>{session.beamLineOperator}</span>
          </Card.Header>

          <Card.Body>
            <Card.Title>
              <Card.Link
                as={Link}
                to={`/proposals/${session.proposal}/sessions/${session.session}`}
              >
                {session.session}
              </Card.Link>
            </Card.Title>

            <Card.Text>
              <span>Start: {session.startDate}</span>
              <br />
              <span>End: {session.endDate}</span>
            </Card.Text>
            <Card.Text>
              <span>
                {session.SessionType.map(
                  (sessionType) => sessionType.typeName
                ).join(',')}
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
      {!sessions.results.length && <li>No sessions found</li>}
    </CardGroup>
  );
}

function UserHome() {
  return (
    <>
      <h1>Current &amp; Upcoming Sessions</h1>
      <SessionRow upcoming />
      <h1>Previous Sessions</h1>
      <SessionRow previous />
    </>
  );
}

function BeamlineGroupHome({ beamlineGroups }: { beamlineGroups: string[] }) {
  const [beamlineGroup, setbeamlineGroup] = useState<string>(beamlineGroups[0]);
  return (
    <>
      {beamlineGroups.length > 1 && (
        <select onChange={(e) => setbeamlineGroup(e.target.value)}>
          {beamlineGroups.map((group) => (
            <option value={group}>{group}</option>
          ))}
        </select>
      )}
      <h1>Upcoming Sessions</h1>
      <SessionRow upcoming beamlineGroup={beamlineGroup} />
      <h1>Previous Sessions</h1>
      <SessionRow previous beamlineGroup={beamlineGroup} />
      <h1>Commissioning Sessions</h1>
      <SessionRow commissioning beamlineGroup={beamlineGroup} />
    </>
  );
}

function HomeMain() {
  const currentUser = useCurrentUser();
  const uiOptions = useUIOptions();

  return (
    <>
      {uiOptions.motd && <Alert variant="success">{uiOptions.motd}</Alert>}
      <section>
        {currentUser.beamlineGroups.length > 0 && (
          <BeamlineGroupHome beamlineGroups={currentUser.beamlineGroups} />
        )}
        {currentUser.beamlineGroups.length === 0 && <UserHome />}
      </section>
    </>
  );
}

export default function Home() {
  return (
    <NetworkErrorPage>
      <HomeMain />
    </NetworkErrorPage>
  );
}
