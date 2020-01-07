import React from 'react';

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", status: "" };
  }

  handleChange = ev => {
    const title = ev.target.value;
    this.setState( { title: title} );
  }

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.addTodo(this.state.title, this.state.status);
    this.setState({ title: "", status: "" });
  }


  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input type="text" value={ this.state.title } onChange={ this.handleChange }/>
        <button type="submit">Add todo</button>
      </form>
    )
  }
}
