import { useNavigate } from 'react-router';
import { useController, useResource } from 'rest-hooks';
import Form from '@rjsf/bootstrap-4';

import { LabContactResource } from 'api/resources/LabContact';
import { OpenAPIResource } from 'api/resources/OpenAPI';

export default function CreateLabContact() {
  const navigate = useNavigate();
  const spec = useResource(OpenAPIResource.detail(), { id: '' });
  const { fetch } = useController();

  const schema = {
    $ref: '#/components/schemas/LabContactCreate',
    components: {
      ...spec.components,
    },
    title: 'Create Lab Contact',
  };

  const uiSchema = {
    proposalId: { classNames: 'hidden-row', 'ui:widget': 'hidden' },
  };

  const onSubmit = ({ formData }: { formData: {} }) => {
    fetch(LabContactResource.create(), {}, formData).then((newContact) => {
      navigate(`/contacts/view/${newContact.labContactId}`);
    });
  };

  const formData = {
    proposalId: 1,
  };

  return (
    <Form
      //   FieldTemplate={ColField}
      liveValidate
      schema={schema}
      uiSchema={uiSchema}
      onSubmit={onSubmit}
      formData={formData}
    />
  );
}
