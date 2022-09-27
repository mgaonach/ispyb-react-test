import { useRef } from 'react';
import Form from '@rjsf/bootstrap-4';
import { Spinner, Button } from 'react-bootstrap';
import { PersonPlus } from 'react-bootstrap-icons';

import { useSchema } from 'hooks/useSpec';
import { useInformativeSubmit } from 'hooks/useInformativeSubmit';
import { LabContactResource } from 'api/resources/LabContact';
import ParsedError from 'components/ParsedError';
import { useProposal } from '../../hooks/useProposal';

export default function CreateLabContact() {
  const proposal = useProposal();
  const alertRef = useRef<any>();
  const { onSubmit, pending, error, lastFormData } = useInformativeSubmit({
    resource: LabContactResource,
    redirect: '/contacts',
    redirectKey: 'labContactId',
    alertRef,
    initialFormData: {
      proposal: proposal,
    },
  });

  const schema = useSchema('LabContactCreate', 'Create Lab Contact');
  const uiSchema = {
    proposalId: { classNames: 'hidden-row', 'ui:widget': 'hidden' },
  };

  return (
    <section>
      <ParsedError error={error} ref={alertRef} />
      <Form
        //   FieldTemplate={ColField}
        liveValidate
        schema={schema}
        uiSchema={uiSchema}
        onSubmit={onSubmit}
        formData={lastFormData}
        disabled={pending}
      >
        <Button type="submit" disabled={pending}>
          <>
            {pending && (
              <Spinner
                size="sm"
                animation="border"
                role="status"
                variant="light"
                className="me-1"
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
            {!pending && <PersonPlus className="me-1" />}
            Create Contact
          </>
        </Button>
      </Form>
    </section>
  );
}
