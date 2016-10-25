import { REQUEST_TODOS, receiveTodos, CREATE_TODO, receiveTodo } from '../actions/todo_actions';
import { fetchTodos, createTodo } from '../util/todo_api_util';

const TodoMiddleware = store => next => action => {
  let success;
  const error = e => console.log(e);

  switch (action.type) {
    case REQUEST_TODOS:
      success = data => {
        store.dispatch(receiveTodos(data));
      };
      fetchTodos(success, error);
      return next(action);
    case CREATE_TODO:
      success = todo => {
        store.dispatch(receiveTodo(todo));
      };
      createTodo(action.todo, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default TodoMiddleware;
