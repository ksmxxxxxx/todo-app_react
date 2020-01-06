import React from 'react';
import { render } from 'react-dom';

import { List } from './List';
import { AddTodo } from './AddTodo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: [],
      nextId: 0
    };
  }

  addTodo = title => {
    this.setState({
      todolist: [ ...this.state.todolist, { title: title } ],
      nextId: this.state.nextId + 1
    });
  };

  render() {
    const todolist = this.state.todolist;
    const addTodo = this.addTodo;
    return (
      <>
        <h1>TODO App</h1>
        <AddTodo addTodo={ addTodo } />
        <h2>List</h2>
        <ul>
          <List todolist={ todolist } />
        </ul>
      </>
    );
  }
}

export default App;
