import React, { JSXElementConstructor, ReactElement } from 'react';
import {
  useSuspense,
  useSubscription,
  NetworkErrorBoundary,
  NetworkError,
} from 'rest-hooks';
import { Col, Row, Container, Button } from 'react-bootstrap';
import { useSearchParams, Link } from 'react-router-dom';

import { EventResource } from 'api/resources/Event';
import { LazyImage } from 'api/resources/Image';
import {
  DataCollection as DataCollectionType,
  RobotAction as RobotActionType,
  Event,
} from 'models/Event.d';
import Paginator from 'components/Layout/Paginator';
import { FileEarmark, Link45deg } from 'react-bootstrap-icons';

interface IButtonProps {
  icon?: ReactElement;
  content?: ReactElement;
  hint: string;
  onClick: any;
}

interface IButtonsProps {
  buttons: Array<IButtonProps>;
}

function Buttons(props: IButtonsProps) {
  return (
    <>
      {props.buttons.map((button) => (
        <Button className="me-1" size="sm" key={button.hint}>
          {button.icon}
          {button.content !== undefined && (
            <span className="ms-1">{button.content}</span>
          )}
          <span className="visually-hidden">{button.hint}</span>
        </Button>
      ))}
    </>
  );
}

interface IEventHeader {
  event: Event;
  title: string;
  buttons?: Array<any>;
}

function EventHeader(props: IEventHeader) {
  return (
    <div className="event-header mb-1 p-1">
      <h3 className="pb-1 text-primary">
        {props.buttons && <Buttons buttons={props.buttons} />}{' '}
        {props.event.startTime} - {props.title}
      </h3>
    </div>
  );
}

function EventBase({ children }: { children: JSX.Element }) {
  return (
    <div className="event border border-secondary rounded p-2 mb-2">
      {children}
    </div>
  );
}

interface MetadataItem {
  title: string;
  content: any;
  test?: any;
  unit?: string;
}

interface IMetadataProps {
  properties: Array<MetadataItem>;
}

function Metadata(props: IMetadataProps) {
  return (
    <Container className="g-0">
      <Row className="metadata-list g-0 me-2">
        {props.properties.map((item) => (
          <React.Fragment key={item.title}>
            {(item.test === undefined || item.test) && (
              <Col sm="6">
                <div className="mx-1 mb-2 p-2 bg-light text-truncate">
                  <span className="text-primary">{item.title}</span>:{' '}
                  {item.content}{' '}
                  <span className="text-primary">{item.unit}</span>
                </div>
              </Col>
            )}
          </React.Fragment>
        ))}
      </Row>
    </Container>
  );
}

function DataCollection(props: { item: DataCollectionType; parent: Event }) {
  const { item, parent } = props;
  return (
    <>
      <EventHeader
        event={parent}
        title={`${item.imageDirectory}/${item.fileTemplate}`}
        buttons={[
          { icon: <Link45deg />, hint: 'Permalink' },
          { icon: <FileEarmark />, content: 0, hint: 'Attachments' },
        ]}
      />
      <Container className="g-0">
        <Row className="g-0">
          <Col md="6">
            <Metadata
              properties={[
                {
                  title: 'Sample',
                  test: parent.blSample,
                  content: (
                    <Link to={`/samples/${parent.blSampleId}`}>
                      {parent.blSample}
                    </Link>
                  ),
                },
                {
                  title: 'Group',
                  test: parent.count > 1,
                  content: (
                    <Link
                      to={`/events?dataCollectionGroupId=${item.DataCollectionGroup.dataCollectionGroupId}`}
                    >
                      {parent.count} Data Collections
                    </Link>
                  ),
                },
                {
                  title: 'Type',
                  content: item.DataCollectionGroup.experimentType,
                },
                { title: 'Status', content: item.runStatus },
                {
                  title: 'Finished',
                  content: parent.endTime,
                  test: parent.endTime,
                },
                { title: 'Wavelength', content: item.wavelength, unit: 'Å' },
                { title: 'No. Points', content: item.numberOfImages },
                {
                  title: 'Exposure Time',
                  content: item.exposureTime,
                  unit: 's',
                },
                {
                  title: 'Beamsize',
                  content: `${item.beamSizeAtSampleX} x ${item.beamSizeAtSampleY}`,
                  unit: 'µm',
                },
              ]}
            />
          </Col>
          <Col className="text-center" xs="12" md="3"></Col>
          <Col className="text-center bg-light" xs="12" md="3">
            {item._metadata.snapshots[1] && (
              <LazyImage
                className="img-fluid"
                src={`/events/image/${parent.id}`}
                alt="Sample snapshot 1"
              />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

function Robot(props: { item: RobotActionType; parent: Event }) {
  const { item, parent } = props;
  return (
    <>
      <EventHeader event={parent} title={item.actionType} />
      <Container>
        <Row>
          <Col>
            <Metadata
              properties={[
                {
                  title: 'Sample',
                  test: parent.blSample,
                  content: (
                    <Link to={`/samples/${parent.blSampleId}`}>
                      {parent.blSample}
                    </Link>
                  ),
                },
                { title: 'Status', content: item.status },
                { title: 'Message', content: item.message, test: item.message },
              ]}
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

function Default(event: Event) {
  return (
    <>
      <EventHeader event={event} title="Experiment" />
      <span>Default</span>
    </>
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

  const events = useSuspense(EventResource.list(), opts);
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
