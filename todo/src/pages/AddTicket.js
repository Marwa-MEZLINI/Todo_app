// import { useContext } from "react";
// import TodoContext from "../context";
import { Tooltip } from "bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todoActions";


const schema = yup.object().shape({
    title: yup.string().required('What do you need to do?'),
    category:yup.mixed().notOneOf(['choose'], 'You have to select a category!!!!').required('You have to select a category!!!!'),
    priority: yup.number().required('Priority is requierd!').positive().integer()
})
function AddTicket() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new Tooltip(tooltipTriggerEl)
    })

    const dispatch = useDispatch();

    const {register, handleSubmit, formState: {errors}, reset , getValues} = useForm({resolver: yupResolver(schema),  mode: "onSubmit",defaultValues: {
        title: '',
        text: '',
        category: '',
        priority: '',
    }});
    
    function addNewTodo(e) {

            const newTodo = {
                title: getValues("title"),
                text: getValues('text'),
                category: getValues("category"),
                priority: getValues('priority'),
                checked: false,
                deleted: false,
                id: Date.now()
            };

            dispatch(addTodo(newTodo));
            reset();
        };

    return (
        <div className="page-container border m-5 p-3  vh-90" >
            <div className="row container d-flex flex-column align-items-center m-0">
                <div className="col-5 d-flex flex-column align-items-center">
                    <h4 className="title ms-2 w-100 text-center">What do you need to do today?</h4>
                    <form className="d-flex-column w-100 py-3 px-0 mt-3" onSubmit={handleSubmit(addNewTodo)}>
                        <label className="h6 form-label mt-3" >Title:</label>
                        <input {...register("title")} type="text" className="form-control w-100 me-0 mb-3" placeholder="Name a task" required />
                        <p>{errors.title?.message}</p>
                        <label className="h6 form-label w-100 mt-3">
                            Description:
                            <textarea {...register("text")} className="w-100 mt-2 mb-3" placeholder="Describe your task..." />
                        </label>
                        <div className="d-flex w-100 my-3 justify-content-between">
                            <label className="h6 form-label w-50 m-0">
                                Category:
                                <select {...register("category")} className="form-select mt-2 w-100 p-2" aria-label="Default select example" required>
                                    <option value='choose'>Choose a category</option>
                                    <option value='family'>Family</option>
                                    <option value='social'>Social</option>
                                    <option value='Sports'>Sports</option>
                                    <option value='personal'>Personal</option>
                                    <option value='professional'>Professional</option>
                                </select>
                            </label>
                            <label className="h6 w-25 m-0 ms-3 d-flex-column justify-content-end">
                                Priority:
                                <input {...register("priority")} type='text' className="w-100 mt-2 p-2" aria-label="number" data-bs-toggle="tooltip" data-bs-placement="top" title="Rate the importance of the task from 0 to 10" required />
                            </label>
                        </div>
                    <button className="add btn btn-primary font-weight-bold todo-list-add-btn my-3 w-50 p-2" type="submit" >
                        Add
                    </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddTicket;