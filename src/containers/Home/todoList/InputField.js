import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputField extends Component {
  static propTypes = {
    onKeyDown: PropTypes.string,
    onSubmitEditing: PropTypes.func,
    value: PropTypes.string,
  }
  constructor(props, context) {
    super(props, context);
    // this.handleKeyDown = this.handleKeyDown.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.state = { value: props.value || ''};
    console.log(context);
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }
  handleKeyDown = (e) => {
    const {onKeyDown, onSubmitEditing} = this.props;
    const {value} = this.state;
    switch (e.keyCode) {
      case 13:
        if (value.trim()) {
          onSubmitEditing(value);
        }
        this.setState({ value: '' });
        break;
      default :
        break;
    }
    onKeyDown(e);
  }
  render() {
  // const {placeholder} = this.props;
    return (
      <div>
        <input
          {...this.props} type="text" onKeyDown={this.handleKeyDown}
          onChange={this.handleChange} />
      </div>
    );
  }
}
