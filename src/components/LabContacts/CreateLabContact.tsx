import { useNavigate } from 'react-router';
import { useController } from 'rest-hooks';
import Form from '@rjsf/bootstrap-4';

import { useSchema } from 'hooks/useSpec';
import { LabContactResource } from 'api/resources/LabContact';

export default function CreateLabContact() {
  const navigate = useNavigate();
  const { fetch } = useController();

  const schema = useSchema('LabContactCreate', 'Create Lab Contact');
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
