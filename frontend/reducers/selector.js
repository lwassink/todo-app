const allTodos = (state) => (
  Object.keys(state.todos).map(todo => state.todos[todo])
);

export default allTodos;
