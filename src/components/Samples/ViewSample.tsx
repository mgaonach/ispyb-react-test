import { useSuspense } from 'rest-hooks';
import { useParams } from 'react-router-dom';

import NetworkErrorPage from 'components/NetworkErrorPage';
import { useSchema } from 'hooks/useSpec';
import { SampleResource } from 'api/resources/Sample';

import EventList from 'components/Events/EventsList';
import InlineEditable from 'components/RJSF/InlineEditable';

function ViewSampleMain() {
  const { blSampleId } = useParams();

  const sample = useSuspense(SampleResource.detail(), {
    blSampleId,
  });

  const schema = useSchema('Sample', 'View Sample');
  const uiSchema = {
    proposalId: { 'ui:classNames': 'hidden-row', 'ui:widget': 'hidden' },
    blSampleId: { 'ui:classNames': 'hidden-row', 'ui:widget': 'hidden' },
    containerId: { 'ui:classNames': 'hidden-row', 'ui:widget': 'hidden' },
    location: { 'ui:classNames': 'hidden-row', 'ui:widget': 'hidden' },
    Crystal: {
      crystalId: { 'ui:classNames': 'hidden-row', 'ui:widget': 'hidden' },
    },
    _metadata: { 'ui:classNames': 'hidden-row', 'ui:widget': 'hidden' },
  };

  function onChange({ field, value }: { field: string; value: any }) {
    console.log('edited', field, value);
  }

  const editable = [
    'root_name',
    'root_comments',
    'root_Crystal_cell_a',
    'root_Crystal_cell_b',
    'root_Crystal_cell_c',
    'root_Crystal_cell_alpha',
    'root_Crystal_cell_beta',
    'root_Crystal_cell_gamma',
  ];

  return (
    <div>
      <section>
        <InlineEditable
          editable={editable}
          schema={schema}
          uiSchema={uiSchema}
          formData={sample}
          onChange={onChange}
        />
      </section>
      <section>
        <EventList blSampleId={blSampleId} limit={5} />
      </section>
    </div>
  );
}

export default function ViewSample() {
  return (
    <NetworkErrorPage>
      <ViewSampleMain />
    </NetworkErrorPage>
  );
}
