import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputField extends Component {
  static propTypes = {
    onKeyDown: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onBlur: PropTypes.func,
  }
  constructor(props, context) {
    super(props, context);
    // this.handleKeyDown = this.handleKeyDown.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.state = { value: props.value || ''};
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }
  handleKeyDown = (e) => {
    const {onKeyDown, onSubmitEditing} = this.props;
    const {value} = this.state;
    switch (e.keyCode) {
      case 13:
        if (value.trim() && onSubmitEditing) {
          onSubmitEditing(value);
          // onSubmitEditing(value);
        }
        this.setState({ value: '' });
        break;
      default :
        break;
    }
    // onKeyDown && onKeyDown(e);
    if (onKeyDown) { onKeyDown(e); }
  }
  render() {
    const {placeholder, onBlur} = this.props;
    return (
      <div>
        <input
          // {...this.props}
          onBlur={onBlur}
          autoFocus
          placeholder={placeholder} type="text"
          value={this.state.value}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange} />
      </div>
    );
  }
}
