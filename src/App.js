import React from 'react';
import { render } from 'react-dom';

import { List } from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      todos: [
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
        <List todos={ this.state.todos }/>
      </div>
    );
  }
}

export default App;
