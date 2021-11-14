import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const local = JSON.parse(localStorage.getItem("todos"));
  const [todos, setTodos] = useState(local ? local : []);


  const addTodo = todo => {
    if (!todo.text) {
      return;
    }

    let newTodos = [todo, ...todos];
    localStorage.setItem("todos", JSON.stringify(newTodos))
    setTodos(newTodos);
  };

  const updateTodo = (id, newValue) => {
    if (!newValue.text) {
      return;
    }

    let newValues = todos.map(todo => todo.id === id ? newValue : todo);
    localStorage.setItem("todos", JSON.stringify(newValues));
    setTodos(newValues);
  };

  const removeTodo = id => {
    const removedArr = todos.filter(todo => todo.id !== id);

    localStorage.setItem("todos", JSON.stringify(removedArr))
    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>Todo Task!</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;