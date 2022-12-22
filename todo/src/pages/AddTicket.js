import { useContext, useRef, useState } from "react";
import TodoContext from "../context";
import { Tooltip } from "bootstrap";
import { Link } from "react-router-dom";

function AddTicket() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new Tooltip(tooltipTriggerEl)
    })

    const { addTodo, todos } = useContext(TodoContext);
    const [formErrors, setFormErrors] = useState({
        title: "",
        category: "",
        priority: ''
    })
    const titleRef = useRef('');
    const textRef = useRef('');
    const categoryRef = useRef('');
    const priorityRef = useRef('');

    function addNewTodo(e) {
        e.preventDefault()
        formValidation()
        console.log(formErrors)
        if (Object.values(formErrors).every(value => !value)) {
            console.log(formErrors)
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
        };
    }

    function formValidation() {
        let errors = formErrors

        errors.category = (categoryRef.current.value === 'choose') ? 'You have to select a category!!!!' : ''

        errors.priority = (!priorityRef.current.value || priorityRef.current.value > 11) ? 'Priority is requierd!' : ''

        errors.title = (!titleRef.current.value) ? 'What do you need to do?' : ''

        if (todos.length > 0) {
            for (var i = 0; i < todos.length; i++) {
                errors.title = (todos[i].title === titleRef.current.value) ? ' Title already exists, Try again!' : ''
            }
        }
        setFormErrors(errors)
    }

    const [value, setValue] = useState('');

    const handleChange = event => {
        const result = event.target.value.replace(/\D/g, '');

        setValue(result);
    };

    return (
        <div className="page-container border m-5 p-3  vh-90" >
            <div className="row container d-flex flex-column align-items-center m-0">
                <div className="col-5 d-flex flex-column align-items-center">
                    <h4 className="title ms-2 w-100 text-center">What do you need to do today?</h4>
                    <form className="d-flex-column w-100 py-3 px-0 mt-3">
                        <label className="h6 form-label mt-3" htmlFor="validationCustomTitle" >Title:</label>
                        <input type="text" id="validationCustomTitle" className="form-control w-100 me-0 mb-3" placeholder="Name a task" ref={titleRef} required />

                        {formErrors?.title && <span className="text-danger">{formErrors.title}</span>}
                        <label className="h6 form-label w-100 mt-3">
                            Description:
                            <textarea className="w-100 mt-2 mb-3" placeholder="Describe your task..." ref={textRef} />
                        </label>
                        <div className="d-flex w-100 my-3 justify-content-between">
                            <label className="h6 form-label w-50 m-0">
                                Category:
                                <select className="form-select mt-2 w-100 p-2" aria-label="Default select example" ref={categoryRef} required>
                                    <option value='choose'>Choose a category</option>
                                    <option value='family'>Family</option>
                                    <option value='social'>Social</option>
                                    <option value='Sports'>Sports</option>
                                    <option value='personal'>Personal</option>
                                    <option value='professional'>Professional</option>
                                </select>
                            </label>
                            {formErrors?.category && <span>{formErrors.category}</span>}
                            <label className="h6 w-25 m-0 ms-3 d-flex-column justify-content-end">
                                Priority:
                                <input type='text' className="w-100 mt-2 p-2" aria-label="number" data-bs-toggle="tooltip" data-bs-placement="top" title="Rate the importance of the task from 0 to 10" ref={priorityRef} value={value} onChange={handleChange} required />
                            </label>
                            {formErrors?.priority && <span>{formErrors.priority}</span>}
                        </div>
                    </form>
                    <button className="add btn btn-primary font-weight-bold todo-list-add-btn my-3 w-50 p-2" onClick={addNewTodo} >
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddTicket;