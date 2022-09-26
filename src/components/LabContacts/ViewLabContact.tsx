import React from 'react';
import { useSuspense } from 'rest-hooks';
import { useParams } from 'react-router-dom';
import Form from '@rjsf/bootstrap-4';

import NetworkErrorPage from 'components/NetworkErrorPage';
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

  const contact = useSuspense(LabContactResource.detail(), {
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

export default function ViewLabContact() {
  return (
    <NetworkErrorPage message="No such lab contact">
      <ViewLabContactMain />
    </NetworkErrorPage>
  );
}
