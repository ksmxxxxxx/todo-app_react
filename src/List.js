import React from 'react';

export class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: [
        { title: 'hogehoge1' },
        { title: 'hogehoge2' },
        { title: 'hogehoge3' },
        { title: 'hogehoge4' },
        { title: 'hogehoge5' }
      ]
    }
  }

  render() {
    return (
      <>
      {this.state.todolist.map(({ title }) => (
        <li>{ title }</li>
      ))}
      </>
    )
  }
}
