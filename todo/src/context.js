import { createContext, useState } from "react";

const TodoContext = createContext({
    todos: [],
    addTodo: (todoList) => { },
    removeTodo: (todoItem) => { },
    isCheked: () => {},
    
});

export function TodoContextProvider(props) {
    const [todos, setTodos] = useState([]);

    function addItemHandler(todoItem) {
        setTodos(todos.concat(todoItem));
    }

    function removeItemHandler(id) {
        setTodos(todos.map(todo => todo.id === id ? {...todo, deleted: !todo.deleted} :todo));
    }

    function changeHandler(id) {
        setTodos(todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo));
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
