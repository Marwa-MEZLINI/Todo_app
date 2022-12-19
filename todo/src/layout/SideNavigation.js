import { Link } from 'react-router-dom'

function SideNavigation() {
    return (

        <nav className="nav col-3 border-end d-flex justify-content-center vh-100" >
            <ul className="list-unstyled d-flex-column align-items-center justify-content-center gap-3 p-5">
                <li className="nav-link active border-bottom p-3">
                    <Link to='/' className='text-decoration-none h4 link-dark ' >Home</Link>
                </li>
                <li className="nav-link border-bottom p-3">
                    <Link to='/add-new-ticket' className='text-decoration-none h4 link-dark ' >Add new ticket</Link>
                </li>
                <li className="nav-link border-bottom p-3">
                    <Link to='/to-do-list' className='text-decoration-none h4 link-dark ' >To-do</Link>
                </li>
                <li className="nav-link border-bottom p-3">
                    <Link to='/completed' className='text-decoration-none h4 link-dark' >Completed</Link>
                </li>
                <li className="nav-link border-bottom p-3">
                    <Link to='/deleted' className='text-decoration-none h4 link-dark ' >Deleted</Link>
                </li>
            </ul>
        </nav>


    )
}

export default SideNavigation;