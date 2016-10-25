import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: ""
    };

    this.handleTitle = this.handleTitle.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitle(e) {
    let title = e.target.value;
    this.setState({title});
  }

  handleBody(e) {
    let body = e.target.value;
    this.setState({body});
  }

  handleSubmit(e) {
    e.preventDefault();
    let {title, body} = this.state;
    let todo = {title, body, done: false};
    this.props.createTodo(todo);
    this.setState({ title: "", body: "" });
  }

  render() {
    return (
      <div>
        <label>Title</label>
        <input className="create-todo-input" onChange={this.handleTitle} value={this.state.title} />
        <br />

        <label>Description</label>
        <textarea className="create-todo-input" onChange={this.handleBody} value={this.state.body} />
        <br />

        <button className="create-todo-input" onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default TodoForm;
