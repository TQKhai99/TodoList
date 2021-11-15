import React from 'react';
import Todo from './Todo';
import TodoForm from "./TodoForm"
function TodoList() {
  return (
    <>
      <h1>Todo Task!</h1>
      <TodoForm />
      <Todo />
    </>
  );
}

export default TodoList;