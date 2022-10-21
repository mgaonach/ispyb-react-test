import { useSuspense } from 'rest-hooks';
import { useParams } from 'react-router-dom';

import NetworkErrorPage from 'components/NetworkErrorPage';
import { useSchema } from 'hooks/useSpec';
import { LabContactResource } from 'api/resources/LabContact';
import InlineEditable from 'components/RJSF/InlineEditable';

function ViewLabContactMain() {
  const { id } = useParams();

  const contact = useSuspense(LabContactResource.detail(), {
    labContactId: id,
  });

  const schema = useSchema('LabContact', 'View Lab Contact');
  const uiSchema = {
    proposalId: { 'ui:classNames': 'hidden-row', 'ui:widget': 'hidden' },
  };

  function onChange({ field, value }: { field: string; value: any }) {
    console.log(field, value);
  }

  return (
    <section>
      <InlineEditable
        schema={schema}
        uiSchema={uiSchema}
        formData={contact}
        onChange={onChange}
      />
    </section>
  );
}

export default function ViewLabContact() {
  return (
    <NetworkErrorPage>
      <ViewLabContactMain />
    </NetworkErrorPage>
  );
}
