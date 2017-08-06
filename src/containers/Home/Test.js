import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Test extends Component {
  static propTypes = {
    title: PropTypes.string,
  }

  getVal = () => 'Johnny in getVal'

  render() {
    const propsStr = this.props.title;
    return (
      <div>
        <h1> {this.getVal()} </h1>
        <h2> {propsStr} </h2>
      </div>
    );
  }
}
