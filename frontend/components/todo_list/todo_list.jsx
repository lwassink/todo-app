import React from 'react';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component {

  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    return (
      <ul>
        {this.props.todos.map(todo => <TodoListItem key={todo.id} todo={todo}/>)}
      </ul>
    );
  }
}

export default TodoList;
