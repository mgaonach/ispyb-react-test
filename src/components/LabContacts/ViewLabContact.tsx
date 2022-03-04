import React from 'react';
import { useResource, NetworkErrorBoundary, NetworkError } from 'rest-hooks';
import { useParams } from 'react-router-dom';
import Form from '@rjsf/bootstrap-4';

import { useSchema } from 'hooks/useSpec';
import { LabContactResource } from 'api/resources/LabContact';

// import {
//     getDefaultRegistry,
//   }  from '@rjsf/core/dist/cjs/utils';

function StringField(props: any) {
  const { name, formData } = props;

  return (
    <span>
      {name}: {formData}
    </span>
  );
}

function ViewLabContactMain() {
  const { id } = useParams();

  const contact = useResource(LabContactResource.detail(), {
    labContactId: id,
  });

  const schema = useSchema('LabContactCreate', 'View Lab Contact');
  const uiSchema = {
    proposalId: { classNames: 'hidden-row', 'ui:widget': 'hidden' },
  };

  return (
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
  );
}

function ErrorPage({ error }: { error: NetworkError }) {
  console.log('Error Page', error);
  return error.status === 404 ? (
    <span>No such lab contact</span>
  ) : (
    <span>An error occured: {error.message}</span>
  );
}

export default function ViewLabContact() {
  return (
    <NetworkErrorBoundary fallbackComponent={ErrorPage}>
      <ViewLabContactMain />
    </NetworkErrorBoundary>
  );
}
