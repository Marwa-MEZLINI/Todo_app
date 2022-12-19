import { useContext, useRef } from "react";
import TodoContext from "../context";
import { Tooltip } from "bootstrap";
import { Link } from "react-router-dom";

function AddTicket() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new Tooltip(tooltipTriggerEl)
    })

    const { addTodo } = useContext(TodoContext);

    const titleRef = useRef('');
    const textRef = useRef('');
    const categoryRef = useRef('');
    const priorityRef = useRef('');

    function addNewTodo() {
        const newTodo = {
            title: titleRef.current.value,
            text: textRef.current.value,
            category: categoryRef.current.value,
            priority: priorityRef.current.value,
            checked: false,
            deleted: false,
            id: Date.now()
        };
        addTodo(newTodo)
    }

    return (
        <div className="page-container border m-5 p-3  vh-90" >
            <div className="row container d-flex justify-conent-center m-0">
                <h4 className="title ms-2">What do you need to do today?</h4>
                <form>
                    <label className="h6">
                        Title:
                        <input type="text" className="form-control" placeholder="Name a task" ref={titleRef} />
                    </label>
                    <label className="h6">
                        Description:
                        <textarea placeholder="Describe your task..." ref={textRef} />
                    </label>
                    <label className="h6">
                        Category:
                        <select className="form-select" aria-label="Default select example" ref={categoryRef}>
                            <option value='choose'>Choose a category</option>
                            <option value='family'>Family</option>
                            <option value='social'>Social</option>
                            <option value='Sports'>Sports</option>
                            <option value='personal'>Personal</option>
                            <option value='professional'>Professional</option>
                        </select>
                    </label>
                    <label className="h6">
                        Priority:
                        <input type='text' aria-label="number" data-bs-toggle="tooltip" data-bs-placement="top" title="Rate the importance of the task from 1 to 10" ref={priorityRef} />
                    </label>
                </form>
                <button className="add btn btn-primary font-weight-bold todo-list-add-btn m-2" onClick={addNewTodo} >
                    <Link to='/todo' className="text-decoration-none text-white">Add</Link>
                </button>

            </div>
        </div>
    )
}

export default AddTicket;