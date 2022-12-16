import { useContext, useEffect, useRef, useState } from "react";
import TodoItem from "../components/TodoItem";
import TodoContext from "../context";

function Home() {
    const { addTodo, todos} = useContext(TodoContext);

    const inputRef = useRef('');
    function addNewTodo(){
        const newTodo = {
            text: inputRef.current.value,
            checked: false,
            deleted: false,
            id : Date.now()
        };
            addTodo(newTodo)
    }
    console.log(todos);
    return (
        <div className="page-container" >
            <div className="row container d-flex justify-conent-center">
                <div className="col-md-12 ">
                    <h4 className="title">Awesome Todo list</h4>
                    <div className="add-items d-flex">
                        <input type="text" className='form-control todo-list-input' placeholder="What do you need to do today?" ref={inputRef} />
                        <button className="add btn btn-primary font-weight-bold todo-list-add-btn" onClick={addNewTodo} >Add</button>
                    </div>
                    <div className="list-wrapper">
                        <ul className="d-flex flex-column-reverse todo-list list-unstyled">
                            {todos.length > 0 && todos.map((todo) => (todo.deleted || todo.checked  ) ? '' :  <li key={todo.id} id={todo.id} ><TodoItem todo={todo} /></li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <p>total todos : {todos.length}</p>
        </div>
    )
}

export default Home;