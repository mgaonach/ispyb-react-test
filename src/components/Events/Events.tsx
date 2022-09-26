import { ReactElement } from 'react';
import { Button } from 'react-bootstrap';
import { Event } from 'models/Event.d';

interface IButtonProps {
  icon?: ReactElement;
  content?: ReactElement;
  hint: string;
  onClick?: () => void;
}

interface IButtonsProps {
  buttons: Array<IButtonProps>;
}

export function Buttons(props: IButtonsProps) {
  return (
    <>
      {props.buttons.map((button) => (
        <Button
          className="me-1"
          size="sm"
          key={button.hint}
          onClick={button.onClick}
        >
          {button.icon}
          {button.content !== undefined && (
            <span className="ms-1">{button.content}</span>
          )}
          <span className="visually-hidden">{button.hint}</span>
        </Button>
      ))}
    </>
  );
}

interface IEventHeader {
  event: Event;
  title: string;
  buttons?: Array<any>;
}

export function EventHeader(props: IEventHeader) {
  return (
    <div className="event-header mb-1 p-1">
      <h3 className="pb-1 text-primary">
        {props.buttons && <Buttons buttons={props.buttons} />}{' '}
        {props.event.startTime} - {props.title}
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
