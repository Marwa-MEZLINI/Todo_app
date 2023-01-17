// import { createContext, useState } from "react";
// import NotificationModal from "./NotificationModal";

// const TodoContext = createContext({
//     todos: [],
//     addTodo: (todoList) => { },
//     removeTodo: (todoItem) => { },
//     isCheked: () => { },

// });

// export function TodoContextProvider(props) {
//     const [todos, setTodos] = useState([]);
//     const [isModalVisible, setIsModalVisible] = useState(false);

//     function addItemHandler(todoItem) {
//         setTodos(todos.concat(todoItem));
//     }

//     function removeItemHandler(id) {
//         let newTodos = todos.map(todo => todo.id === id ? { ...todo, deleted: !todo.deleted } : todo);
//         setIsModalVisible(true);
//         setTodos(newTodos);
//     }

//     function changeHandler(id) {
//         let newTodos = todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo);
//         setIsModalVisible(true);
//         setTodos(newTodos);

//     }

//     const context = {
//         todos: todos,
//         addTodo: addItemHandler,
//         removeTodo: removeItemHandler,
//         isCheked: changeHandler
//     }

//     return (
//         <TodoContext.Provider value={context}>
//             {props.children}
//             <NotificationModal todo={todos.find((todo) => todo.deleted || todo.checked)} isVisible={isModalVisible} setIsVisible={setIsModalVisible} />
//         </TodoContext.Provider>
//     );
// }

// export default TodoContext;
