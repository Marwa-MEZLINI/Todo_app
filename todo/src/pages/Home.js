import { useContext, useRef } from "react";
import TodoItem from "../components/TodoItem";
import TodoContext from "../context";

function Home() {
    const { addTodo, todos } = useContext(TodoContext);

    const inputRef = useRef('');
    function addNewTodo() {
        const newTodo = {
            text: inputRef.current.value,
            checked: false,
            deleted: false,
            id: Date.now()
        };
        addTodo(newTodo)
    }



    return (
        <div className="page-container border m-5 p-3" >
            <div className="row container d-flex justify-conent-center m-0">
                <div className="col-md-12 ">
                    <h4 className="title ms-2">Awesome Todo list</h4>
                    <div className="add-items d-flex">
                        <input type="text" className='form-control todo-list-input m-2' placeholder="What do you need to do today?" ref={inputRef} />
                        <button className="add btn btn-primary font-weight-bold todo-list-add-btn m-2" onClick={addNewTodo} >Add</button>
                    </div>
                    <div className="list-wrapper">
                        <ul className="d-flex flex-column todo-list list-unstyled gap-3 m-3">
                            {todos.length > 0 && todos.map((todo) => (todo.deleted || todo.checked) ? '' : <li className="border-bottom pb-2" key={todo.id} id={todo.id} ><TodoItem todo={todo} /></li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <p>total todos : {todos.length}</p>


        </div>
    )
}

export default Home;