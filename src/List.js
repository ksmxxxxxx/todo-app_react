import React from 'react';

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const listItem = this.props.todolist.map((elem, i) => {
        const doneButtonLable = elem.done ? 'incompleted' : 'complete';
        const doneClassLabel = elem.done ? 'complete' : 'incomplete';
        return <div className={ doneClassLabel }>
            <div className="p-3 border-bottom d-flex justify-content-between align-items-center" key={i}>
              <div className="list-item-title">
                <span>{elem.title}</span>
              </div>
              <div className="list-buttons">
                <button className="btn btn-success" onClick={ () => this.props.updateStatus(elem.index) }>{ doneButtonLable }</button>
                <button className="btn btn-danger ml-2" onClick={ () => this.props.removeTodo(elem.index) }>delete</button>
              </div>
            </div>
          </div>
      });
    return (
      <>
      {listItem}
      </>
    )
  }
}
