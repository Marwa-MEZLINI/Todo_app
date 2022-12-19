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

                    <div className="modal d-flex flex-row justify-content-center w-25 border position-relative bottom-15 start-15">

                        {todo.checked && <p className="bg-dark text-white w-100 m-0 p-3">You completed a new task</p>}
                        {todo.deleted && <p className="bg-dark text-white w-100 m-0 p-3">You deleted an incomplete task</p>}

                    </div>, notificationElement
                )

            }
        </React.Fragment>

    )
}

export default notificationModal;

