import { Col, Container, Row, Tab } from 'react-bootstrap';

import { EventResource } from 'api/resources/Event';
import { useSuspense } from 'rest-hooks';
import { IDataCollection } from '../Default';
import { SessionResource } from 'api/resources/Session';
import { DataCollectionBox } from '../../DataCollection';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function SSXDataCollectionGroup(props: IDataCollection) {
  const { parent, item } = props;
  const dataCollectionGroupId = item.DataCollectionGroup.dataCollectionGroupId;
  const dcs = useSuspense(EventResource.list(), {
    dataCollectionGroupId,
    skip: 0,
    limit: 100,
  });

  const [tabKey, setTabKey] = useState<string | null>('Summary');

  const session = useSuspense(SessionResource.detail(), {
    sessionId: parent.sessionId,
  });

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const deployedId = searchParams.get('deployedId');
  // const res = <Row className="g-0">{dcs.results.length}</Row>;

  const deployed = Number(deployedId) === dataCollectionGroupId;
  const onDeploy = () => {
    navigate(`?deployedId=${dataCollectionGroupId}`);
  };
  const dcg = parent;

  return (
    <div
      style={{ margin: 5, cursor: deployed ? undefined : 'pointer' }}
      onClick={onDeploy}
    >
      <Tab.Container activeKey={tabKey || 'Summary'} onSelect={setTabKey}>
        <DataCollectionBox
          {...props}
          showProcessing={false}
          buttons={[
            {
              content: <>Summary</>,
              hint: 'Summary',
              onClick: () => setTabKey('Summary'),
              hidden: !deployed,
              variant: tabKey === 'Summary' ? 'primary' : 'outline-primary',
            },
            {
              content: <>Parameters</>,
              hint: 'Parameters',
              onClick: () => setTabKey('Parameters'),
              hidden: !deployed,
              variant: tabKey === 'Parameters' ? 'primary' : 'outline-primary',
            },
          ]}
        >
          <Container fluid>
            <Row>
              <Col md="auto"></Col>
            </Row>
          </Container>
        </DataCollectionBox>
      </Tab.Container>
    </div>
  );
}
