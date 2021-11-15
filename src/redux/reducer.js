import {ADD_TODO, EDIT_TODO, RENDER_EDIT, DELETE_TODO, COMPLETE_TODO} from "./actionTypes";

const local = JSON.parse(localStorage.getItem("todos"));
const initState = {
    todos : local || [],
    edit : {id: null, newValue: ""}
}

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            const {todo} = action.payload;
            let todos = state.todos;
            if(todo.text){
                todos = [...todos, todo];
            }
            localStorage.setItem("todos", JSON.stringify(todos));

            return {
                ...state,
                todos: todos
            };
        }
        case EDIT_TODO: {
            const {id, newValue} = action.payload;
            let todos = state.todos;
            if(newValue) {
                todos = todos.map(todo => {
                    if(todo.id === id){
                        todo.text = newValue;
                    }
                    return todo;
                })
            }
            localStorage.setItem("todos", JSON.stringify(todos));
            return {
                ...state,
                edit: {id: null, newValue: ""},
                todos: todos
            }
        }
        case RENDER_EDIT:{
            const {id, newValue} = action.payload;
            return {
                ...state,
                edit: {id: id, newValue: newValue}
            }
        }
        case DELETE_TODO: {
            const {id} = action.payload;
            let todos = state.todos.filter(todo => todo.id !== id);
            localStorage.setItem("todos", JSON.stringify(todos));
            return {
                ...state,
                todos: todos
            };
        }
        case COMPLETE_TODO: {
            const {id} = action.payload;
            let todos = state.todos.map(todo => {
                if(todo.id === id){
                    todo.isComplete = !todo.isComplete;
                }
                return todo;
            })
            localStorage.setItem("todos", JSON.stringify(todos));
            return {
                ...state,
                todos: todos
            };
        }
        default:
            return state;
    }
}

export default todoReducer;