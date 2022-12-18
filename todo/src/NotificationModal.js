import ReactDOM from "react-dom";
import React from "react";

function notificationModal(todo) {
console.log(todo);
    return ReactDOM.createPortal(
        <div className="alert alert-dark">

            {todo.checked && <p>You completed a new task</p>}
            {todo.deleted && <p>You deleted an incomplete task</p>}

        </div>,
        document.getElementById('portal-root')
    )
}

export default notificationModal;

