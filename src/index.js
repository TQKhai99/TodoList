import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";

// const local = JSON.parse(localStorage.getItem("todos"));
// const todoReducer = (state = {todos: local || []} , action) => {
//   const addTodo = todo => {
//     if (!todo.text) {
//       return;
//     }

//     let newTodos = [todo, ...state];
//     localStorage.setItem("todos", JSON.stringify(newTodos))
//     state.todos = newTodos;
//     return state.todos;
//   };

//   const updateTodo = (id, newValue) => {
//     if (!newValue.text) {
//       return;
//     }

//     let newValues = state.todos.map(todo => todo.id === id ? newValue : todo);
//     localStorage.setItem("todos", JSON.stringify(newValues));
//     state.todos = newValues;
//     return state.todos;
//   };

//   // const removeTodo = id => {
//   //   const removedArr = state.todos.filter(todo => todo.id !== id);

//   //   localStorage.setItem("todos", JSON.stringify(removedArr))
//   //   state.todos = removedArr;
//   //   return state.todos;
//   // };

//   // const completeTodo = id => {
//   //   let updatedTodos = state.todos.map(todo => {
//   //     if (todo.id === id) {
//   //       todo.isComplete = !todo.isComplete;
//   //     }
//   //     return todo;
//   //   });

//   //   localStorage.setItem("todos", JSON.stringify(updatedTodos));
//   //   state.todos = updatedTodos;
//   //   return state.todos;
//   // };

//   switch (action.type) {
//     case 'ADD_TODO':
//       return addTodo(action.todo);
//     case 'UPDATE_TODO':
//       return updateTodo(action.id, action.newValue);
//     // case 'REMOVE_TODO':
//     //   return removeTodo(action.id);
//     // case 'COMPLETE_TODO':
//     //   return completeTodo(action.id);
//     // default:
//     //   return state
//   }
// }

// let store = createStore(todoReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);