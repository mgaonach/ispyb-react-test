import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { DataCollection as DataCollectionType, Event } from 'models/Event.d';
import Metadata from '../Metadata';
// import PerImageAnalysis from '../PerImageAnalysis';
import Snapshot, { DiffractionSnapshot, PerImageSnapshot } from './Snapshot';

export interface IDataCollection {
  item: DataCollectionType;
  parent: Event;
  isGroup: boolean;
}

export default function Default({ parent, item }: IDataCollection) {
  return (
    <Row className="g-0">
      <Col md="4">
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
                  to={`/proposals/${parent.proposal}/sessions/${parent.sessionId}?dataCollectionGroupId=${item.DataCollectionGroup.dataCollectionGroupId}`}
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
            {
              title: 'Duration',
              content: parent.duration ? Math.round(parent.duration) : 0,
              unit: 'min',
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
      <Col className="text-center bg-light" xs="12" md="2">
        <DiffractionSnapshot parent={parent} item={item} />
      </Col>
      <Col className="text-center bg-light" xs="12" md="3">
        <Snapshot item={item} />
      </Col>
      <Col className="text-center bg-light" xs="12" md="3">
        <PerImageSnapshot item={item} />
        {/* <PerImageAnalysis
          dataCollectionId={item.dataCollectionId}
          endTime={parent.endTime}
        /> */}
      </Col>
    </Row>
  );
}
