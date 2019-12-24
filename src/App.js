import React from 'react';
import { render } from 'react-dom';

import { List } from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      todolist: [
        { title: 'hogehoge1' },
        { title: 'hogehoge2' },
        { title: 'hogehoge3' },
        { title: 'hogehoge4' },
        { title: 'hogehoge5' },
        { title: 'hogehoge6' }
      ]
    };
  }

  render() {
    return (
      <div>
        <List todolist={ this.state.todolist }/>
      </div>
    );
  }
}

export default App;
