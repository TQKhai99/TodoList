import { ADD_TODO, EDIT_TODO, RENDER_EDIT, DELETE_TODO, COMPLETE_TODO } from "./actionTypes";

export const addTodo = todo => ({
    type: ADD_TODO,
    payload: { todo }
});

export const editTodo = (id, newValue) => ({
    type: EDIT_TODO,
    payload: {id, newValue}
});

export const renderEdit = (id, newValue) => ({
    type: RENDER_EDIT,
    payload: {id, newValue}
})

export const deleteTodo = id => ({
    type: DELETE_TODO,
    payload: {id}
});

export const completeTodo = id => ({
    type: COMPLETE_TODO,
    payload: {id}
});