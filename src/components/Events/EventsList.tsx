import { JSXElementConstructor } from 'react';
import { useSuspense, useSubscription } from 'rest-hooks';
import { useSearchParams } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

import { EventResource } from 'api/resources/Event';
import NetworkErrorPage from 'components/NetworkErrorPage';
import Paginator from 'components/Layout/Paginator';
import { usePath } from 'hooks/usePath';
import { usePaging } from 'hooks/usePaging';
import { Event } from 'models/Event.d';

import { EventBase } from './Events';
import Default from './Default';
import RobotAction from './RobotAction';
import DataCollection from './DataCollection';

function renderTemplate(event: Event) {
  const templates: Record<string, JSXElementConstructor<any>> = {
    dc: DataCollection,
    robot: RobotAction,
  };

  if (event.type in templates) {
    const Template = templates[event.type];
    return <Template item={event.Item} parent={event} />;
  }

  return <Default {...event} />;
}

interface IEventsList {
  blSampleId?: string;
  refresh?: boolean;
}

function EventListMain({ blSampleId, refresh }: IEventsList) {
  const [searchParams] = useSearchParams();
  const session = usePath('session');
  const { skip, limit } = usePaging();
  const dataCollectionId = searchParams.get('dataCollectionId');
  const dataCollectionGroupId = searchParams.get('dataCollectionGroupId');

  const opts = {
    skip,
    limit,
    ...(dataCollectionId ? { dataCollectionId } : {}),
    ...(dataCollectionGroupId ? { dataCollectionGroupId } : {}),
    ...(blSampleId ? { blSampleId } : {}),
    ...(session ? { session } : {}),
  };

  const events = useSuspense(EventResource.list(), opts);
  useSubscription(EventResource.list(), refresh ? opts : null);

  return (
    <section>
      <Paginator total={events.total} skip={events.skip} limit={events.limit} />
      {events.results.map((event) => (
        <EventBase key={event.pk()}>{renderTemplate(event)}</EventBase>
      ))}
      {!events.results.length && <Alert>No events yet</Alert>}
      <Paginator total={events.total} skip={events.skip} limit={events.limit} />
    </section>
  );
}

export default function EventList(props: IEventsList) {
  return (
    <NetworkErrorPage>
      <EventListMain {...props} />
    </NetworkErrorPage>
  );
}
