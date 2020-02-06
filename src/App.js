import React from 'react';
import { render } from 'react-dom';

import List from './List';
import { AddTodo } from './AddTodo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: [],
      nextId: 0
    };
    this.updateStatus = this.updateStatus.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo = title => {
    this.setState({
      todolist: [ ...this.state.todolist, { title: title , index: this.state.nextId + 1, done: false } ],
      nextId: this.state.nextId + 1
    });
  };

  updateStatus = index => {
    const todoItems = this.state.todolist.slice();
    const todoItem = todoItems[index - 1];
    todoItem.done = !todoItem.done;
    todoItems[index - 1] = todoItem;
    this.setState({ todoItems });
  }

  removeTodo = index => {
    this.setState({
      todolist: this.state.todolist.filter(todo => (todo.index !== index))
    });
  }

  render() {
    const { todolist } = this.state;
    return (
      <>
        <h1 className="h2">TODO App</h1>
        <AddTodo addTodo={ this.addTodo } />
        <h2 className="h3">List</h2>
        <div className="mt-3">
          <List removeTodo={ this.removeTodo } todolist={ todolist } updateStatus={ this.updateStatus } />
        </div>
      </>
    );
  }
}

export default App;
