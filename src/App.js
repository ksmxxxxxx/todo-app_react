import React from 'react';
import { render } from 'react-dom';

import { List } from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>TODO App</h1>
        <h2>List</h2>
        <ul>
          <List todolist={ this.props.todolist } />
        </ul>
      </div>
    );
  }
}

export default App;
