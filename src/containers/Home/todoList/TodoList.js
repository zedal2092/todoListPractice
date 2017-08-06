import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.array,
    onDeleteTodo: PropTypes.func,
    onToggleTodo: PropTypes.func,
    onUpdateTodo: PropTypes.func,
  }
  render() {
    const { todos, onDeleteTodo, onToggleTodo, onUpdateTodo } = this.props; // 待辦清單
    const todoElement = todos.map(todo => (
      <li key={todo.id}>
        <TodoItem
          title={todo.title}
          completed={todo.completed}
          onUpdate={content => onUpdateTodo && onUpdateTodo(todo.id, content)}
          onDelete={() => onDeleteTodo && onDeleteTodo(todo.id)}
          onToggle={completed => onToggleTodo && onToggleTodo(todo.id, completed)}/>
      </li>
    ));
    return (
      <div>
        <ul>
          {todoElement}
        </ul>
      </div>
    );
  }
}
