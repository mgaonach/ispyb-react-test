import { useState } from 'react';
import { useSuspense } from 'rest-hooks';
import { Link } from 'react-router-dom';
import { Card, CardGroup } from 'react-bootstrap';
import classNames from 'classnames';

import { SessionResource, SessionGroupResource } from 'api/resources/Session';
import { useCurrentUser } from 'hooks/useCurrentUser';
import NetworkErrorPage from 'components/NetworkErrorPage';

interface ISessionRow {
  upcoming?: boolean;
  previous?: boolean;
  commissioning?: boolean;
  uiGroup?: string;
}

function SessionRow(props: ISessionRow) {
  const { upcoming, previous, commissioning, uiGroup } = props;

  const resource = uiGroup ? SessionGroupResource : SessionResource;
  const sessions = useSuspense(resource.list(), {
    ...(upcoming ? { upcoming: true } : {}),
    ...(previous ? { previous: true } : {}),
    ...(commissioning ? { sessionType: 'commissioning' } : {}),
    ...(uiGroup ? { uiGroup } : {}),
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
    <div>
      <h2>Current &amp; Upcoming Sessions</h2>
      <SessionRow upcoming />
      <h2>Previous Sessions</h2>
      <SessionRow previous />
    </div>
  );
}

function UIGroupHome({ uiGroups }: { uiGroups: string[] }) {
  const [uiGroup, setUIGroup] = useState<string>(uiGroups[0]);
  return (
    <div>
      {uiGroups.length > 1 && (
        <select onChange={(e) => setUIGroup(e.target.value)}>
          {uiGroups.map((group) => (
            <option value={group}>{group}</option>
          ))}
        </select>
      )}
      <div>
        <h2>Upcoming Sessions</h2>
        <SessionRow upcoming uiGroup={uiGroup} />
        <h2>Previous Sessions</h2>
        <SessionRow previous uiGroup={uiGroup} />
        <h2>Commissioning Sessions</h2>
        <SessionRow commissioning uiGroup={uiGroup} />
      </div>
    </div>
  );
}

function HomeMain() {
  const currentUser = useCurrentUser();

  return (
    <div>
      {currentUser.uiGroups.length > 0 && (
        <UIGroupHome uiGroups={currentUser.uiGroups} />
      )}
      {currentUser.uiGroups.length === 0 && <UserHome />}
    </div>
  );
}

export default function Home() {
  return (
    <NetworkErrorPage>
      <HomeMain />
    </NetworkErrorPage>
  );
}
