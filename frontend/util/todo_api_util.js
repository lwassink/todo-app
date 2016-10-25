
export const fetchTodo = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/todos/${id}`,
    success,
    error
  });
};

export const fetchTodos = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/todos',
    success,
    error
  });
};

export const createTodo = (data, success, error) => {
  $.ajax({
    method: "POST",
    url: 'api/todos',
    data: {todo: data},
    success,
    error
  });
};

export const updateTodo = (id, data, success, error) => {
  $.ajax({
    method: "PATCH",
    url: `api/todos/${id}`,
    data: {todo: data},
    success,
    error
  });
};

export const destroyTodo = (id, success, error) => {
  $.ajax({
    method: "DELETE",
    url: `api/todos/${id}`,
    success,
    error
  });
};
