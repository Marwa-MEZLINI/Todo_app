import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo , isChecked } from "../redux/actions/todoActions"


function TodoItem(props) {
    const dispatch = useDispatch();
    const { todo } = props;


    return (
        <React.Fragment>
            <div className="card ps-3">
                <p className="h4 ps-3 pt-3"> {todo.title} </p>
                <div className="d-flex flex-row align-items-center py-3 justify-content-between">
                    <div className="form-check d-flex p-0 ms-3 ml-auto"  >
                        <input className="checkbox me-1" type="checkbox" onChange={() => { dispatch(isChecked(todo.id)) }} ></input>
                        <label className={`form-check-label mx-1 align-center ${todo.checked ? "text-decoration-line-through" : ""}`}>
                            {todo.text}
                        </label>
                    </div>
                    <div className="d-flex flex-row justify-content-between px-3 ml-auto align-items-center">
                        <p className="m-0 px-3"> <span className="fw-bold px-3 text-indigo-800">Category:  </span> {todo.category} </p>
                        <p className="m-0 px-3"> <span className="fw-bold px-3">Priority:  </span> {todo.priority} </p>
                        <button type="button" className="btn-close ms-auto  px-3" aria-label="Close" onClick={() => dispatch(removeTodo(todo.id))}></button>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default TodoItem;