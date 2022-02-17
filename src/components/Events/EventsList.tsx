import { useResource, useSubscription } from 'rest-hooks';
import { EventResource } from 'api/resources/Event';

function EventHeader(props: any) {
  return <div className="event-header">{props.startTime}</div>;
}

function EventBase(props: any) {
  return <div className="event border rounded p-2 m-2">{props.children}</div>;
}

function DataCollection(props: any) {
  return (
    <div className="event">
      <EventHeader {...props} />
      <span>DC</span>
      <ul>
        <li>Type: {props.Item.DataCollectionGroup.experimentType}</li>
        <li>Wavelength: {props.Item.wavelength}</li>
      </ul>
    </div>
  );
}

function Robot(props: any) {
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

function Default(props: any) {
  return (
    <div className="event">
      <EventHeader {...props} />
      <span>Default</span>
    </div>
  );
}

function renderTemplate(event: any) {
  const templates: any = {
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
