import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { createTodo } from './actions/todo_actions';
import allTodos from './reducers/selector';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  ReactDOM.render(
    <Root store={store}/>,
      document.getElementById('content'));

  window.store = store;
  window.$ = $;
  window.createTodo = createTodo;
  window.allTodos = allTodos;
});
