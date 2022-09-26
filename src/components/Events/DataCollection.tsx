import { Col, Row, Container } from 'react-bootstrap';
import { FileEarmark, Link45deg } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';

import { LazyImage } from 'api/resources/XHRFile';
import LightBox from 'components/LightBox';

import { EventHeader } from './Events';
import Metadata from './Metadata';
import { DataCollection as DataCollectionType, Event } from 'models/Event.d';
import { DataCollectionFileAttachmentsModal } from './DataCollectionFileAttachments';
import { useState } from 'react';

export default function DataCollection(props: {
  item: DataCollectionType;
  parent: Event;
}) {
  const { item, parent } = props;
  const navigate = useNavigate();
  const [showAttachments, setShowAttachments] = useState<boolean>(false);

  const groupOrId = {
    ...(parent.count > 1
      ? {
          dataCollectionGroupId: item.DataCollectionGroup.dataCollectionGroupId,
        }
      : null),
    ...(parent.count === 1
      ? { dataCollectionId: item.dataCollectionId }
      : null),
  };

  return (
    <>
      <DataCollectionFileAttachmentsModal
        onHide={() => setShowAttachments(false)}
        show={showAttachments}
        {...groupOrId}
      />
      <EventHeader
        event={parent}
        title={`${item.imageDirectory}/${item.fileTemplate}`}
        buttons={[
          {
            icon: <Link45deg />,
            hint: 'Permalink',
            onClick: () =>
              navigate('?dataCollectionId=' + item.dataCollectionId),
          },
          {
            icon: <FileEarmark />,
            content: parent.attachments,
            hint: 'Attachments',
            onClick: () => setShowAttachments(true),
          },
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
                    <Link
                      to={`/proposals/${parent.proposal}/samples/${parent.blSampleId}`}
                    >
                      {parent.blSample}
                    </Link>
                  ),
                },
                {
                  title: 'Group',
                  test: parent.count > 1,
                  content: (
                    <Link
                      to={`/proposals/${parent.proposal}/sessions/${parent.session}?dataCollectionGroupId=${item.DataCollectionGroup.dataCollectionGroupId}`}
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
              <LightBox
                images={Object.entries(item._metadata.snapshots)
                  .map(([snapshotId, available]) =>
                    available
                      ? `/datacollections/images/${parent.id}?imageId=${snapshotId}`
                      : ''
                  )
                  .filter((image) => !!image)}
              >
                <LazyImage
                  className="img-fluid"
                  src={`/datacollections/images/${parent.id}?snapshot=true`}
                  alt="Sample snapshot 1"
                />
              </LightBox>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
