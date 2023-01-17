
import TodoItem from '../components/TodoItem';
import { useSelector } from "react-redux";


function Todo() {
    const todos = useSelector(state => state.todos);

    

    return (
        <div className="page-container border m-5 p-3  vh-90" >
            <div className="row container d-flex justify-conent-center m-0">
                <div className="col-md-12 ">
                    <div className="add-items d-flex">
                    </div>
                    <div className="list-wrapper">
                        <ul className="d-flex flex-column todo-list list-unstyled gap-3 m-3">
                            {todos.length > 0 && todos.map((todo) => (todo.deleted || todo.checked) ? '' : <li className="border-bottom pb-2" key={todo.id} id={todo.id} ><TodoItem todo={todo} /></li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo;