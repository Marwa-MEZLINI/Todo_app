import { createContext, useState } from "react";

const AddItemContext = createContext({
    todos: [],
    addTodo: (todoList) => { },
    removeTodo: (todoItem) => { }
});

export function AddItemContextProvider(props) {
    const [todoItem, setTodoItem] = useState([]);

    function addItemHandler() {
        setTodoItem((prevTodoList) => {
            return prevTodoList.concat(todoList)
        });
    }

    function removeItemHandler(todoItem) {
        setTodoItem((prevTodoList) => {
            return prevTodoList.filter(todo => todo.text !== todoItem)
        });
    }

    const context = {
        todos: todoItem,
        addTodo: addItemHandler,
        removeTodo: removeItemHandler
    }

    return (
        <AddItemContext.Provider value={context}>
            {props.children}
        </AddItemContext.Provider>
    )
}

export default AddItemContext;
