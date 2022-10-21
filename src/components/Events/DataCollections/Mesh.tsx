import { Col, Row } from 'react-bootstrap';

import Default, { IDataCollection } from './Default';
import Snapshot from './Snapshot';

function InteractiveMesh(props: IDataCollection) {
  return (
    <Row className="g-0">
      <Col md="6">Interactive Mesh</Col>
      <Col className="text-center bg-light" xs="12" md="3">
        <Snapshot item={props.item} />
      </Col>
    </Row>
  );
}

export default function Mesh(props: IDataCollection) {
  return props.item.GridInfo && props.item.GridInfo.length ? (
    <InteractiveMesh {...props} />
  ) : (
    <Default {...props} />
  );
}
