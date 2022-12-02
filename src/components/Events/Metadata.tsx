import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export interface IMetadataItemProps {
  title: string;
  content: any;
  test?: any;
  unit?: string;
}

export interface IMetadataProps {
  properties: Array<IMetadataItemProps>;
}

export default function Metadata(props: IMetadataProps) {
  return (
    <Container className="g-0">
      <Row className="metadata-list g-0 me-2">
        {props.properties.map((item) => (
          <Col sm="6">
            <MetadataItem {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export function MetadataCol(props: IMetadataProps) {
  return (
    <Col className="metadata-list  g-0 me-2">
      {props.properties.map((item) => (
        <Row>
          <MetadataItem {...item} />
        </Row>
      ))}
    </Col>
  );
}

export function MetadataItem(props: IMetadataItemProps) {
  return (
    <React.Fragment key={props.title}>
      {(props.test === undefined || props.test) && (
        <div className="mx-1 mb-2 p-2 bg-light text-truncate">
          <span className="text-primary">{props.title}</span>: {props.content}{' '}
          <span className="text-primary">{props.unit}</span>
        </div>
      )}
    </React.Fragment>
  );
}
