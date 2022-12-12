import { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";

function Home(props) {
    const [addedtodos, setAddedTodos] = useState([]);
    
    useEffect(() => {
        
    })

    return (
        <div className="page-container" >
            <div className="row container d-flex justify-conent-center">
                <div className="col-md-12 ">
                    <h4 className="title">Awesome Todo list</h4>
                    <div className="add-items d-flex">
                        <input type="text" className='form-control todo-list-input' placeholder="What do you need to do today?" />
                        <button className="add btn btn-primary font-weight-bold todo-list-add-btn">Add</button>
                    </div>
                    <div className="list-wrapper">
                        <ul className="d-flex flex-column-reverse todo-list list-unstyled">
                            <TodoItem />
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;