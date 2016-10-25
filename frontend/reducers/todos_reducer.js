import { RECEIVE_TODOS } from '../actions/todo_actions';
import { merge, union } from 'lodash';

const TodosReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_TODOS:
      let newState = {};
      action.todos.forEach(todo => (newState[todo.id] = todo));
      return newState;
    default:
      return oldState;
  }
};

export default TodosReducer;
