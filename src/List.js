import React from 'react';

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const listItem = this.props.todolist.map((elem, i) => {
        const doneButtonLable = elem.done ? 'incompleted' : 'complete';
        return <li key={i}>
          {elem.title}
            <button onClick={ () => this.props.updateStatus(elem.index) }>{ doneButtonLable }</button>
            <button onClick={ () => this.props.removeTodo(elem.index) }>delete</button>
          </li>
      });
    return (
      <>
      {listItem}
      </>
    )
  }
}
