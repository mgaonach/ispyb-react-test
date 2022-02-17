import React, { useState } from 'react';
import { useResource } from 'rest-hooks';

import { useParams } from 'react-router-dom';
import Form from '@rjsf/bootstrap-4';
import { OpenAPIResource } from 'api/resources/OpenAPI';
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

export default function ViewLabContact() {
  //   const [errors, setErrors] = useState('');
  const { id } = useParams();

  const contact = useResource(LabContactResource.detail(), {
    labContactId: id,
  });


  const spec = useResource(OpenAPIResource.detail(), { id: '' });

  const schema = {
    $ref: '#/components/schemas/LabContactCreate',
    components: {
      ...spec.components,
    },
    title: 'View Lab Contact',
  };

  const uiSchema = {
    proposalId: { classNames: 'hidden-row', 'ui:widget': 'hidden' },
    defaultCourrierCompany: {
      'ui:emptyValue': null,
    },
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

      {/* { errors && (
          <div>
            An error occured: {errors}
          </div>
      )} */}
    </section>
  );
}
