import {
  useResource,
  useSubscription,
  NetworkErrorBoundary,
  NetworkError,
} from 'rest-hooks';
import { Col, Row, Container } from 'react-bootstrap';
import { useSearchParams, Link } from 'react-router-dom';

import { EventResource } from 'api/resources/Event';
import { Event } from 'models/Event.d';
import Paginator from 'components/Layout/Paginator';

function EventHeader(props: Event) {
  return (
    <div className="event-header">
      <h3>{props.startTime}</h3>
      {props.endTime && <div>Finished {props.endTime}</div>}
      {props.blSample && (
        <div>
          Sample:{' '}
          <Link to={`/samples/${props.blSampleId}`}>{props.blSample}</Link>
        </div>
      )}
    </div>
  );
}

function EventBase({ children }: { children: JSX.Element }) {
  return <div className="event border rounded p-2 m-2">{children}</div>;
}

function DataCollection(props: Event) {
  if ('wavelength' in props.Item) {
    return (
      <div className="event">
        <EventHeader {...props} />
        <span>
          Data Collection{' '}
          {props.count > 1 && (
            <span>
              [
              <Link
                to={`/events?dataCollectionGroupId=${props.Item.DataCollectionGroup.dataCollectionGroupId}`}
              >
                Group of {props.count}
              </Link>
              ]
            </span>
          )}
        </span>
        <Container>
          <Row>
            <Col>
              <ul>
                <li>Type: {props.Item.DataCollectionGroup.experimentType}</li>
                <li>Status: {props.Item.runStatus}</li>
                <li>Wavelength: {props.Item.wavelength}</li>
              </ul>
            </Col>
            <Col className="text-right">
              {props.Item._metadata.snapshots[1] && (
                <img
                  src={`http://localhost:8000/events/image/${props.id}`}
                  alt="image1"
                />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function Robot(props: Event) {
  if ('actionType' in props.Item) {
    return (
      <div className="event">
        <EventHeader {...props} />
        <span>Sample Action</span>
        <ul>
          <li>Type: {props.Item.actionType}</li>
          {props.Item.status && <li>Status: {props.Item.status}</li>}
          {props.Item.message && <li>Message: {props.Item.message}</li>}
        </ul>
      </div>
    );
  }
}

function Default(props: Event) {
  return (
    <div className="event">
      <EventHeader {...props} />
      <span>Default</span>
    </div>
  );
}

function renderTemplate(event: Event) {
  const templates: { [key: string]: any } = {
    dc: DataCollection,
    robot: Robot,
  };

  if (event.type in templates) {
    return templates[event.type](event);
  }

  return Default(event);
}

interface IEventsList {
  blSampleId?: string;
}

function EventListMain({ blSampleId }: IEventsList) {
  const [searchParams] = useSearchParams();
  const skip = searchParams.get('skip') || 0;
  const limit = searchParams.get('limit') || 3;
  const dataCollectionGroupId = searchParams.get('dataCollectionGroupId');

  const opts: { [key: string]: any } = { skip, limit };
  if (dataCollectionGroupId) opts.dataCollectionGroupId = dataCollectionGroupId;
  if (blSampleId) opts.blSampleId = blSampleId;

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
