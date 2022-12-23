import ReactDOM from "react-dom";
import React, { useEffect } from "react";

function NotificationModal({ todo, isVisible, setIsVisible }) {
    useEffect(() => {
        let timeoutId;

        if (isVisible) {
            timeoutId = setTimeout(() => setIsVisible(false), 20000);
        }

        return () => clearTimeout(timeoutId);
    }, [isVisible, setIsVisible]);

    if (!isVisible) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className={`d-flex flex-row justify-content-center w-25 position-absolute top-0 end-0 border rounded-2`}>

            {todo.checked && <p className="bg-dark text-white w-100 m-0 p-3 rounded-2">You completed a new task</p>}
            {todo.deleted && <p className="bg-dark text-white w-100 m-0 p-3 rounded-2">You deleted an incomplete task</p>}
        </div>,
        document.getElementById('portal-root'),
    );
}

export default NotificationModal;

