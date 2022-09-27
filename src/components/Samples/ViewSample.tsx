import React from 'react';
import { useSuspense } from 'rest-hooks';
import { useParams } from 'react-router-dom';
import Form from '@rjsf/bootstrap-4';

import NetworkErrorPage from 'components/NetworkErrorPage';
import { useSchema } from 'hooks/useSpec';
import { SampleResource } from 'api/resources/Sample';

import EventList from 'components/Events/EventsList';

function StringField(props: any) {
  const { name, formData } = props;

  return (
    <span>
      {name}: {formData}
    </span>
  );
}

function ViewSampleMain() {
  const { blSampleId } = useParams();

  const contact = useSuspense(SampleResource.detail(), {
    blSampleId,
  });

  const schema = useSchema('Sample', 'View Sample');
  const uiSchema = {
    proposalId: { classNames: 'hidden-row', 'ui:widget': 'hidden' },
  };

  return (
    <div>
      <section>
        <Form
          liveValidate
          fields={{ StringField }}
          schema={schema}
          uiSchema={uiSchema}
          formData={contact}
        >
          <React.Fragment />
        </Form>
      </section>
      <section>
        <EventList blSampleId={blSampleId} />
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
