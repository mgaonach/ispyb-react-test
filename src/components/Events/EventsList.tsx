import { JSXElementConstructor } from 'react';
import {
  useResource,
  useSubscription,
  NetworkErrorBoundary,
  NetworkError,
} from 'rest-hooks';
import { Col, Row, Container } from 'react-bootstrap';
import { useSearchParams, Link } from 'react-router-dom';

import { EventResource } from 'api/resources/Event';
import {
  DataCollection as DataCollectionType,
  RobotAction as RobotActionType,
  Event,
} from 'models/Event.d';
import Paginator from 'components/Layout/Paginator';

function EventHeader(event: Event) {
  return (
    <div className="event-header">
      <h3>{event.startTime}</h3>
      {event.endTime && <div>Finished {event.endTime}</div>}
      {event.blSample && (
        <div>
          Sample:{' '}
          <Link to={`/samples/${event.blSampleId}`}>{event.blSample}</Link>
        </div>
      )}
    </div>
  );
}

function EventBase({ children }: { children: JSX.Element }) {
  return <div className="event border rounded p-2 m-2">{children}</div>;
}

function DataCollection(props: { item: DataCollectionType; parent: Event }) {
  const { item, parent } = props;
  return (
    <div className="event">
      <EventHeader {...parent} />
      <span>
        Data Collection{' '}
        {parent.count > 1 && (
          <span>
            [
            <Link
              to={`/events?dataCollectionGroupId=${item.DataCollectionGroup.dataCollectionGroupId}`}
            >
              Group of {parent.count}
            </Link>
            ]
          </span>
        )}
      </span>
      <Container>
        <Row>
          <Col>
            <ul>
              <li>Type: {item.DataCollectionGroup.experimentType}</li>
              <li>Status: {item.runStatus}</li>
              <li>Wavelength: {item.wavelength}</li>
            </ul>
          </Col>
          <Col className="text-right">
            {item._metadata.snapshots[1] && (
              <img
                src={`http://localhost:8000/events/image/${parent.id}`}
                alt="image1"
              />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function Robot(props: { item: RobotActionType; parent: Event }) {
  const { item, parent } = props;
  return (
    <div className="event">
      <EventHeader {...parent} />
      <span>Sample Action</span>
      <ul>
        <li>Type: {item.actionType}</li>
        {item.status && <li>Status: {item.status}</li>}
        {item.message && <li>Message: {item.message}</li>}
      </ul>
    </div>
  );
}

function Default(event: Event) {
  return (
    <div className="event">
      <EventHeader {...event} />
      <span>Default</span>
    </div>
  );
}

function renderTemplate(event: Event) {
  const templates: Record<string, JSXElementConstructor<any>> = {
    dc: DataCollection,
    robot: Robot,
  };

  if (event.type in templates) {
    const Template = templates[event.type];
    return <Template item={event.Item} parent={event} />;
  }

  return <Default {...event} />;
}

interface IEventsList {
  blSampleId?: string;
}

function EventListMain({ blSampleId }: IEventsList) {
  const [searchParams] = useSearchParams();
  const skip = searchParams.get('skip') || 0;
  const limit = searchParams.get('limit') || 3;
  const dataCollectionGroupId = searchParams.get('dataCollectionGroupId');

  const opts = {
    skip,
    limit,
    ...(dataCollectionGroupId ? { dataCollectionGroupId } : {}),
    ...(blSampleId ? { blSampleId } : {}),
  };

  const events = useResource(EventResource.list(), opts);
  useSubscription(EventResource.list(), opts);

  return (
    <section>
      <Paginator total={events.total} skip={events.skip} limit={events.limit} />
      {events.results.map((event) => (
        <EventBase key={event.pk()}>{renderTemplate(event)}</EventBase>
      ))}
      {!events.results.length && <div>No events yet</div>}
      <Paginator total={events.total} skip={events.skip} limit={events.limit} />
    </section>
  );
}

function ErrorPage({ error }: { error: NetworkError }) {
  return error.status === 422 ? (
    <span>Parameter validation error: {String(error.response?.json())} </span>
  ) : (
    <span>An error occured: {error.message}</span>
  );
}

export default function EventList(props: IEventsList) {
  return (
    <NetworkErrorBoundary fallbackComponent={ErrorPage}>
      <EventListMain {...props} />
    </NetworkErrorBoundary>
  );
}
