import { createContext, useState } from "react";
import notificationModal from "./NotificationModal";

const TodoContext = createContext({
    todos: [],
    addTodo: (todoList) => { },
    removeTodo: (todoItem) => { },
    isCheked: () => { },

});

export function TodoContextProvider(props) {
    const [todos, setTodos] = useState([]);

    function addItemHandler(todoItem) {
        setTodos(todos.concat(todoItem));
    }

    function removeItemHandler(id) {
        let newTodos = todos.map(todo => todo.id === id ? { ...todo, deleted: !todo.deleted } : todo)
        notificationModal(newTodos.find(todo => todo.id === id))
        setTodos(newTodos);
    }

    function changeHandler(id) {
        let newTodos = todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo)
        notificationModal(newTodos.find(todo => todo.id === id))
        setTodos(newTodos);

    }

    const context = {
        todos: todos,
        addTodo: addItemHandler,
        removeTodo: removeItemHandler,
        isCheked: changeHandler
    }

    return (
        <TodoContext.Provider value={context}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContext;
