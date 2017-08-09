import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import InputField from './InputField';
import TodoList from './TodoList';

const updateTodoItem = (todos, id, title) => {
  const target = todos.find(todo => todo.id === id);
  if (target) target.title = title;
  return todos;
};

const createTodoItem = (todos, title) => {
  todos.push({
    id: todos.length ? todos[todos.length - 1].id + 1 : 1,
    title,
    completed: false
  });
  // if (todos.length !== 0) {
  //   todos.push({
  //     id: todos[todos.length - 1].id + 1,
  //     title,
  //     completed: false
  //   });
  // } else {
  //   todos.push({
  //     id: 1,
  //     title,
  //     completed: false,
  //   });
  // }
  return todos;
};

const deleteTodoItem = (todos, id) => {
  const idx = todos.findIndex(todo => todo.id === id);
  if (idx !== -1) todos.splice(idx, 1);
  return todos;
};
const toggleTodoItem = (todos, id, completed) => {
  const target = todos.find(todo => todo.id === id);
  if (target) target.completed = completed;
  return todos;
};
export default class TodoApp extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [
        {
          id: 0,
          title: 'Item 1',
          completed: false
        },
        {
          id: 2,
          title: 'Item 2',
          completed: false
        },
        {
          id: 3,
          title: 'Item 3',
          completed: false
        },
      ],
      displayMode: 0,
    };
  }
  render() {
    const todos = this.state.todos;
    const name = {
      firstName: 'Johnny',
      lastName: 'Wu',
      sex: 'male',
      age: 28,
    };
    const displayMode = this.state.displayMode; // 0 for all --- 1 for todo  --- 2 for completed
    // debugger;
    let todosRender = todos;
    if (displayMode === 1) {
      todosRender = todos.filter(todo => !todo.completed);
    } else if (displayMode === 2) {
      todosRender = todos.filter(todo => todo.completed);
    }


    return (
      <div>
        <TodoHeader
          name={name} count={todos.filter(todo => !todo.completed).length}
          todos={todos}
          buttonAll={
            () => this.setState({displayMode: 0})
          }
          buttonTodo={
            () => this.setState({displayMode: 1})
          }
          buttonCompleted={
            () => this.setState({displayMode: 2})
          }
        />
        <InputField
          placeholder="新增待辦清單" onSubmitEditing={
            title => this.setState({ todos: createTodoItem(todos, title) })}
          />
        <TodoList
          todos={todosRender}
          onDeleteTodo={id => this.setState({ todos: deleteTodoItem(todos, id) })}
          onToggleTodo={
            (id, completed) => this.setState({
              todos: toggleTodoItem(todos, id, completed)
            })
          }
          onUpdateTodo={
            (id, title) => this.setState({
              todos: updateTodoItem(todos, id, title)
            })
          }
          />
      </div>
    );
  }
}

