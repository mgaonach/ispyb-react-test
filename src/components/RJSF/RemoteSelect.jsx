import { createRef, Component } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';

import { map } from 'lodash';

import { withNamespace } from 'providers/namespace';
import metadata from 'providers/metadata';

class Select extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
  }

  componentDidMount() {
    this.props.onChange(this.ref.current.value);
  }

  render() {
    const {
      id,
      value,
      disabled,
      readonly,
      autofocus,
      onBlur,
      onFocus,
      onChange,
      options,
      selectOptions,
    } = this.props;

    return (
      <Form.Control
        ref={this.ref}
        as="select"
        className="connected-select"
        value={value}
        id={id}
        disabled={disabled || readonly}
        autoFocus={autofocus}
        onChange={(event) => onChange(event.target.value)}
        onBlur={onBlur && ((event) => onBlur(id, event.target.value))}
        onFocus={onFocus && ((event) => onFocus(id, event.target.value))}
      >
        {map(selectOptions, (c) => (
          <option key={c[options.value]} value={c[options.value]}>
            {c[options.key]}
          </option>
        ))}
      </Form.Control>
    );
  }
}

const mapStateToProps = (state, props) => {
  const provider = props.providers.metadata[props.options.selector];
  return {
    selectOptions: provider.selector('results', state),
  };
};

const ConnSelect = withNamespace({ metadata })(
  connect(mapStateToProps)(Select)
);

// rjsf does not like connected component as a custom widget
function ConnectedSelect(props) {
  return <ConnSelect {...props} />;
}

export default ConnectedSelect;
