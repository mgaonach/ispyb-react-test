import { Placeholder, Tab } from 'react-bootstrap';

import { EventResource } from 'api/resources/Event';
import { useSuspense } from 'rest-hooks';
import { IDataCollection } from '../Default';
import { DataCollectionBox } from '../../DataCollection';
import { Suspense, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CompactSSXContent } from './SSXCompact';
import { SampleResource } from 'api/resources/Sample';
import { DeployedSSXContent } from './SSXDeployed';
import Loading from 'components/Loading';

export default function SSX(props: IDataCollection) {
  return (
    <Suspense fallback={<LoadingSSXDataCollectionGroup />}>
      <SSXDataCollectionGroup {...props} />
    </Suspense>
  );
}

function LoadingSSXDataCollectionGroup() {
  return (
    <>
      <div className="event-header mb-1 p-1">
        <h3 className="pb-1 text-primary">
          <Placeholder xs={1}></Placeholder>
        </h3>
      </div>
      <Loading />
    </>
  );
}

export function SSXDataCollectionGroup(props: IDataCollection) {
  const { item } = props;
  const dataCollectionGroupId = item.DataCollectionGroup.dataCollectionGroupId;
  const dcs = useSuspense(EventResource.list(), {
    dataCollectionGroupId,
    skip: 0,
    limit: 100,
  });

  const [tabKey, setTabKey] = useState<string | null>('Summary');

  const sample = useSuspense(SampleResource.detail(), {
    blSampleId: item.DataCollectionGroup.blSampleId,
  });

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const deployedId = searchParams.get('deployedId');
  // const res = <Row className="g-0">{dcs.results.length}</Row>;

  const deployed = Number(deployedId) === dataCollectionGroupId;
  const onDeploy = () => {
    navigate(`?deployedId=${dataCollectionGroupId}`);
  };
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
              variant: tabKey === 'Summary' ? 'light' : 'outline-light',
            },
            {
              content: <>Parameters</>,
              hint: 'Parameters',
              onClick: () => setTabKey('Parameters'),
              hidden: !deployed,
              variant: tabKey === 'Parameters' ? 'light' : 'outline-light',
            },
          ]}
        >
          {deployed ? (
            <DeployedSSXContent
              dcgItem={item}
              dcs={dcs.results}
              sample={sample}
            />
          ) : (
            <CompactSSXContent
              dcgItem={item}
              dcs={dcs.results}
              sample={sample}
            />
          )}
        </DataCollectionBox>
      </Tab.Container>
    </div>
  );
}
