import React from 'react';

export class List extends React.Component {
  render() {
    const list = this.props.todos.map(todo => {
      return(
        <li>{ todo.title }</li>
      );
    });

    return (
      <ul>
        <li>{ list }</li>
      </ul>
    );
  }
}
