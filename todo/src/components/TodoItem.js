import React, { useContext } from "react";
import TodoContext from "../context";

function TodoItem(props) {
    const { removeTodo, isCheked } = useContext(TodoContext);
    const { todo } = props;


    return (
        <React.Fragment>
            <div className="form-check d-flex justify-self-end p-0"  >
                <input className="checkbox me-1" type="checkbox" onChange={() => { isCheked(todo.id) }} ></input>
                <label className={`form-check-label mx-1 ${todo.checked ? "text-decoration-line-through" : ""}`}>
                    {todo.text}
                </label>
                <button type="button" className="btn-close ms-auto" aria-label="Close" onClick={() => removeTodo(todo.id)}></button>
            </div>

        </React.Fragment>

    )
}

export default TodoItem;