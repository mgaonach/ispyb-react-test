import { ReactElement } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Event } from 'models/Event.d';
import { usePath } from 'hooks/usePath';

interface IButtonProps {
  icon?: ReactElement;
  content?: ReactElement;
  hint: string;
  variant?: string;
  disabled?: boolean;
  hidden?: boolean;
  onClick?: () => void;
}

interface IButtonsProps {
  buttons: Array<IButtonProps>;
}

export function Buttons(props: IButtonsProps) {
  return (
    <>
      {props.buttons.map((button) =>
        button.hidden ? null : (
          <Button
            className="me-1"
            size="sm"
            key={button.hint}
            onClick={button.onClick}
            variant={button.variant}
            disabled={button.disabled}
          >
            {button.icon}
            {button.content !== undefined && (
              <span className="ms-1">{button.content}</span>
            )}
            <span className="visually-hidden">{button.hint}</span>
          </Button>
        )
      )}
    </>
  );
}

interface IEventHeader {
  event: Event;
  title: string;
  buttons?: Array<any>;
}

export function EventHeader(props: IEventHeader) {
  const sessionId = usePath('sessionId');
  const { event, buttons, title } = props;

  return (
    <div className="event-header mb-1 p-1">
      <h3 className="pb-1 text-primary">
        {buttons && <Buttons buttons={buttons} />}
        {!sessionId && (
          <>
            <Link
              className="btn btn-secondary btn-sm"
              to={`/proposals/${event.proposal}/sessions/${event.sessionId}`}
            >
              {event.session ? event.session : event.proposal}
            </Link>{' '}
          </>
        )}
        {event.startTime} - {title}
      </h3>
    </div>
  );
}

export function EventBase({ children }: { children: JSX.Element }) {
  return (
    <div className="event border border-secondary rounded p-2 mb-2">
      {children}
    </div>
  );
}
