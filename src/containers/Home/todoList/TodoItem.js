import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from './InputField.js';

export default class TodoItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    completed: PropTypes.bool,
    onDelete: PropTypes.func,
    onToggle: PropTypes.func,
    onUpdate: PropTypes.func,
  }
  constructor(props, context) {
    super(props, context);
    this.state = { editable: false};
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }
  toggleEditMode() {
    this.setState({editable: !this.state.editable});
  }
  renderViewMode() {
    const { onDelete, completed, title, onToggle} = this.props;
    return (
      <div>
        <input
          type="checkbox" checked={completed}
          onChange={() => onToggle && onToggle(!completed)}/>
        <span onDoubleClick={this.toggleEditMode}>{title}</span>
        <button onClick={() => onDelete && onDelete()}>x</button>
      </div>
    );
  }
  renderEditMode() {
    const { title, onUpdate } = this.props;
    return (
      <InputField
        autoFocus
        placeHolder="編輯待辦事項"
        defaultvalue={title}
        onBlur={this.toggleEditMode}
        checked={this.props.completed}
        onkeyDown={(e) => {
          if (e.keyCode === 27) {
            e.preventDefault();
            this.toggleEditMode();
          }
        }}
        onSubmitEditing={(content) => {
          onUpdate(content);
          this.toggleEditMode();
        }}
      />
    );
  }
  render() {
    return this.state.editable ? this.renderEditMode() : this.renderViewMode();
  }
}
