import React from 'react';
import { useResource, NetworkErrorBoundary, NetworkError } from 'rest-hooks';

import { useParams } from 'react-router-dom';
import Form from '@rjsf/bootstrap-4';
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

  const contact = useResource(SampleResource.detail(), {
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
        <h3>Data Collections</h3>
        <EventList blSampleId={blSampleId} />
      </section>
    </div>
  );
}

function ErrorPage({ error }: { error: NetworkError }) {
  console.log('Error Page', error);
  return error.status === 404 ? (
    <span>No such sample</span>
  ) : (
    <span>An error occured: {error.message}</span>
  );
}

export default function ViewSample() {
  return (
    <NetworkErrorBoundary fallbackComponent={ErrorPage}>
      <ViewSampleMain />
    </NetworkErrorBoundary>
  );
}
