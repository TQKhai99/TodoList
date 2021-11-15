import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "./actionTypes";

export const addTodo = todo => ({
    type: ADD_TODO,
    payload: { todo }
});

export const deleteTodo = id => ({
    type: DELETE_TODO,
    payload: {id}
});

export const completeTodo = id => ({
    type: COMPLETE_TODO,
    payload: {id}
});