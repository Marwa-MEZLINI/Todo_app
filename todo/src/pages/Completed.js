import { useContext } from "react";
import TodoContext from "../context";
import { ReactComponent as ReactIcon } from "../assets/checkIcon.svg";

function Completed() {
    const { todos } = useContext(TodoContext);




    return (
        <div className="page-container border m-5 p-3  vh-90">
            <div className="row container d-flex justify-conent-center m-0" >
                <div className="col-12" >
                    <ul className="d-flex flex-column todo-list list-unstyled gap-3">
                        {todos.length > 0 && todos.map((todo) => !todo.checked ? '' : <li key={todo.id} id={todo.id} ><div className="row d-flex-row align-items-center"><ReactIcon className="col-1 text-success"/> <p className="col-11 m-0 p-0">{todo.text}</p></div></li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Completed;