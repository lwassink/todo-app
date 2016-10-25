import TodosReducer from './todos_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  todos: TodosReducer
});

export default RootReducer;
