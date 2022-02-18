import { useResource, useSubscription } from 'rest-hooks';
import { EventResource } from 'api/resources/Event';
import { Event } from 'models/Event.d';
import { Col, Row, Container } from 'react-bootstrap';

function EventHeader(props: Event) {
  return <div className="event-header">{props.startTime}</div>;
}

function EventBase({ children }: { children: JSX.Element }) {
  return <div className="event border rounded p-2 m-2">{children}</div>;
}

function DataCollection(props: Event) {
  if ('wavelength' in props.Item) {
    return (
      <div className="event">
        <EventHeader {...props} />
        <span>DC</span>
        <Container>
          <Row>
            <Col>
              <ul>
                <li>Type: {props.Item.DataCollectionGroup.experimentType}</li>
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
        <span>Robot</span>
        <ul>
          <li>Type: {props.Item.actionType}</li>
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

export default function EventList({ sortBy }: { sortBy?: string }) {
  const events = useResource(EventResource.list(), { sortBy });
  useSubscription(EventResource.list(), { sortBy });

  return (
    <section>
      {events.results.map((event) => (
        <EventBase key={event.pk()}>{renderTemplate(event)}</EventBase>
      ))}
      <span>Total: {events.total}</span>
    </section>
  );
}
