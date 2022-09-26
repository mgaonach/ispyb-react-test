import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface MetadataItem {
  title: string;
  content: any;
  test?: any;
  unit?: string;
}

interface IMetadataProps {
  properties: Array<MetadataItem>;
}

export default function Metadata(props: IMetadataProps) {
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
