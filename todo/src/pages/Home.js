import React from "react";

import { ReactComponent as ReactAddIcon } from '../assets/addIcon.svg';
import { ReactComponent as ReactTodoIcon } from '../assets/todosIcon.svg';
import { ReactComponent as ReactDoneIcon } from '../assets/doneIcon.svg';
import { ReactComponent as ReactRemoveIcon } from '../assets/removeIcon.svg';
import { Link } from "react-router-dom";


function Home() {
    return (
        <div className="page-container border m-5 p-3  vh-90" >
            <div className="row container d-flex justify-conent-center m-0">
                <div className="row d-flex-row-wrap justify-content-evenly h-100">

                    <div className="col-2 border p-3 m-5 w-25 h-50 d-flex align-items-center justify-content-center">
                        <Link to='/add-new-ticket' className="text-decoration-none">
                            <ReactAddIcon className="text-secondary" />
                        </Link>
                    </div>


                    <div className="col-2 border m-5 p-3 w-25 h-50 d-flex align-items-center justify-content-center">
                        <Link to='/todo' className='text-decoration-none p-4'>
                            <ReactTodoIcon className="text-secondary" />
                        </Link>
                    </div>


                    <div className="col-2 border m-5 p-3 w-25 h-50 d-flex align-items-center justify-content-center">
                        <Link to='/completed' className='text-decoration-none p-4'>
                            <ReactDoneIcon className="text-success" />
                        </Link>
                    </div>

                    <div className="col-2 border m-5 p-3 w-25 h-50 d-flex align-items-center justify-content-center">
                        <Link to='/deleted' className='text-decoration-none p-4'>
                            <ReactRemoveIcon className="text-danger" />
                        </Link>
                    </div>

                </div>
            </div>
        </div>



    )
}

export default Home;