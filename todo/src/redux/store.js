import { createStore } from "redux";
import { ADD_TODO, CHECK_TODO, REMOVE_TODO } from "./actions/todoActions";

const initialState = {
    todos: [],
    isModalVisible: false
};

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat(action.payload)
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload ? { ...todo, deleted: !todo.deleted } : todo),
                isModalVisible: true
            };
        case CHECK_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload ? { ...todo, checked: !todo.checked } : todo),
                isModalVisible: true
            };
        default:
            return state;
    }
}

export const store = createStore(todoReducer);
  