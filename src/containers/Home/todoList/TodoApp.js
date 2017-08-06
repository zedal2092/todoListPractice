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
    id: todos[todos.length - 1].id + 1,
    title,
    completed: false
  });
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
    return (
      <div>
        <TodoHeader name={name} count={todos.filter(todo => !todo.complete).length}/>
        <InputField
          placeholder="新增待辦清單" onSubmitEditing={
          title => this.setState({todos: createTodoItem(todos, title)})
        }/>
        <TodoList
          todos={todos}
          onDeleteTodo={id => this.setState({todos: deleteTodoItem(todos, id)})}
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

