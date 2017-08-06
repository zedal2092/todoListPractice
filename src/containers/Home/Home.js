import React, { Component } from 'react';
import Header from './Header.js';
import Content from './Content.js';
import Test from './Test.js';
import './Home.less';
import TodoApp from './todoList/TodoApp.js';

export default class Home extends Component {
  render() {
    const title = '1123';
    return (
      <div id="pageHome">
        <Header />
        <Content />
        <Test title={title}/>
        <TodoApp />
      </div>
    );
  }
}
