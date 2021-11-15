import {ADD_TODO, DELETE_TODO, COMPLETE_TODO} from "./actionTypes";

const local = JSON.parse(localStorage.getItem("todos"));
const initState = {
    todos : local || []
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