import { useContext } from "react";
import TodoContext from "../context";
import { ReactComponent as ReactIcon} from "../assets/checkIcon.svg";

function Completed() {
    const {todos} = useContext(TodoContext);
    



    return (
        <div className="container">
            <div className="row" >
                <div className="col-6" >
                    <ul className="d-flex flex-column-reverse todo-list list-unstyled">
                        {todos.length > 0 && todos.map((todo) => !todo.checked  ? '' :  <li key={todo.id} id={todo.id} ><div><ReactIcon /> <p>{todo.text}</p></div></li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Completed;