import React, { useContext } from "react";
import TodoContext from "../context";

function TodoItem(props) {
    const {removeTodo, isCheked} = useContext(TodoContext);
    const { todo } = props;


    return (
        <React.Fragment>
            <div className="form-check"  >                
                    <input className="checkbox" type="checkbox" onChange={() => isCheked(todo.id)} ></input>
                    <label className={`form-check-label ${todo.checked ? "text-decoration-line-through" : "" }`}>
                       {todo.text}
                </label>
                <button type="button" className="btn-close" aria-label="Close" onClick={() => removeTodo(todo.id)}></button>
            </div>
            
        </React.Fragment>

    )
}

export default TodoItem;