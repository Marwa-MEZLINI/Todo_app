import ReactDOM from "react-dom";
import React from "react";
import { createRoot } from "react-dom/client";

function notificationModal(todo) {
    let notificationElement = document.getElementById('portal-root')
    let notification = createRoot(notificationElement);
    notification.render(
        <React.Fragment>
            {
                ReactDOM.createPortal(

                    <div className="alert alert-dark">

                        {todo.checked && <p>You completed a new task</p>}
                        {todo.deleted && <p>You deleted an incomplete task</p>}

                    </div>, notificationElement
                )

            }
        </React.Fragment>

    )
}

export default notificationModal;

