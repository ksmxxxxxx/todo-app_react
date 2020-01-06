import React from 'react';

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      {this.props.todolist.map(({ title }) => (
        <li>{ title }</li>
      ))}
      </>
    )
  }
}
