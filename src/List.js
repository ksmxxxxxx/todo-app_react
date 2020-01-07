import React from 'react';

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const buttonText = this.props.done
    console.log(buttonText);
    return (
      <>
      {this.props.todolist.map(post => (
        <>
          <li key={post.index}>
            {post.title}
          </li>
          <button onClick={ () => this.props.updateStatus(post.index) }>{ buttonText }</button>
          <button onClick={ () => this.props.removeTodo(post.id) }>delete</button>
        </>
      ))}
      </>
    )
  }
}
