import ReactDOM from "react-dom";
import React, { useEffect } from "react";

function NotificationModal({ todo, isVisible, setIsVisible }) {
    useEffect(() => {
        let timeoutId;

        if (isVisible) {
            timeoutId = setTimeout(() => setIsVisible(false), 3000);
        }

        return () => clearTimeout(timeoutId);
    }, [isVisible, setIsVisible]);

    if (!isVisible) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="modal d-flex flex-row justify-content-center w-25 border position-relative bottom-15 start-15">

            {todo.checked && <p className="bg-dark text-white w-100 m-0 p-3">You completed a new task</p>}
            {todo.deleted && <p className="bg-dark text-white w-100 m-0 p-3">You deleted an incomplete task</p>}
        </div>,
        document.getElementById('portal-root'),
    );
}

export default NotificationModal;

