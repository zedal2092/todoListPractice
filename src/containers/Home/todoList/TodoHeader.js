import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoHeader extends Component {
  static propTypes = {
    name: PropTypes.object,
    count: PropTypes.number,
  }
  render() {
    const {name, count} = this.props;
    return (
      <div>
        <h1>我的待辦清單</h1>
        <h2>Hello {name.firstName} 你有{count}個待辦事項</h2>
      </div>
    );
  }
}
