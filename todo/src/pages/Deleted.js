import { useContext } from "react";
import TodoContext from "../context";

function Deleted(){
    const {todos} = useContext(TodoContext);

    return (
        <div className="container">
            <div className="row" >
                <div className="col-6" >
                    <ul className="d-flex flex-column-reverse todo-list list-unstyled">
                    {todos.length > 0 && todos.map((todo) => !todo.deleted  ? '' :  <li key={todo.id} id={todo.id} ><p> {todo.text} </p></li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Deleted;