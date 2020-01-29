import React from 'react';

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const listItem = this.props.todolist.map((elem, i) => {
        const doneButtonLable = elem.done ? 'incompleted' : 'complete';
        const doneClassLabel = elem.done ? 'complete' : 'incomplete';
        return <li key={i}>
          <span className={ doneClassLabel }>{elem.title}</span>
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
