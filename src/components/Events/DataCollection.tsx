import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FileEarmark, Link45deg } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

import { DataCollection as DataCollectionType, Event } from 'models/Event.d';
import { ProcessingStatuses as ProcessingStatusesType } from 'models/ProcessingStatusesList.d';
import { AutoProcProgramMessageStatus as AutoProcProgramMessageStatusType } from 'models/AutoProcProgramMessageStatuses.d';
import { EventHeader } from './Events';
import { DataCollectionFileAttachmentsModal } from './DataCollectionFileAttachments';
import { ProcessingStatuses } from './Processing';
import MessageStatus from './MessageStatus';
import Workflow from './Workflow';

import Default from './DataCollections/Default';
import Mesh from './DataCollections/Mesh';
import EM from './DataCollections/EM';

function renderInner({
  item,
  parent,
}: {
  item: DataCollectionType;
  parent: Event;
}) {
  const renderMap: Record<string, any> = {
    Mesh: Mesh,
    EM: EM,
  };

  const Component =
    item.DataCollectionGroup.experimentType in renderMap
      ? renderMap[item.DataCollectionGroup.experimentType]
      : Default;

  return <Component item={item} parent={parent} isGroup={parent.count > 1} />;
}

export default function DataCollection(props: {
  item: DataCollectionType;
  parent: Event;
  processingStatuses?: ProcessingStatusesType;
  messageStatuses?: AutoProcProgramMessageStatusType;
}) {
  const { item, parent } = props;
  const navigate = useNavigate();
  const [showAttachments, setShowAttachments] = useState<boolean>(false);

  const groupOrId = {
    ...(parent.count > 1
      ? {
          dataCollectionGroupId: item.DataCollectionGroup.dataCollectionGroupId,
        }
      : null),
    ...(parent.count === 1
      ? { dataCollectionId: item.dataCollectionId }
      : null),
  };

  return (
    <>
      <DataCollectionFileAttachmentsModal
        onHide={() => setShowAttachments(false)}
        show={showAttachments}
        {...groupOrId}
      />
      <EventHeader
        event={parent}
        title={`${item.imageDirectory}/${item.fileTemplate}`}
        buttons={[
          {
            icon: <Link45deg />,
            hint: 'Permalink',
            onClick: () =>
              navigate(
                parent.count > 1
                  ? '?dataCollectionGroupId=' +
                      item.DataCollectionGroup.dataCollectionGroupId
                  : '?dataCollectionId=' + item.dataCollectionId
              ),
          },
          {
            icon: <FileEarmark />,
            content: parent.attachments,
            hint: 'Attachments',
            disabled: parent.attachments === 0,
            onClick: () => setShowAttachments(true),
          },
          {
            icon: <MessageStatus statuses={props.messageStatuses} />,
            variant: 'outline-primary',
            hint: 'Processing Status Messages',
            hidden:
              !props.messageStatuses ||
              (props.messageStatuses?.errors === 0 &&
                props.messageStatuses?.warnings === 0),
          },
        ]}
      />
      <Container className="g-0">{renderInner({ item, parent })}</Container>
      {item.DataCollectionGroup.Workflow && parent.count > 1 && (
        <Workflow {...item.DataCollectionGroup.Workflow} />
      )}
      <ProcessingStatuses
        statuses={props.processingStatuses}
        dataCollectionId={parent.id}
      />
    </>
  );
}
