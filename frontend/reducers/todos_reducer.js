import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';
import { merge, union } from 'lodash';

const TodosReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = {};
  switch (action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach(todo => (newState[todo.id] = todo));
      return newState;
    case RECEIVE_TODO:
      newState = merge({}, oldState);
      newState[action.todo.id] = action.todo;
      return newState;
    default:
      return oldState;
  }
};

export default TodosReducer;
