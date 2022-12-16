import { Link } from 'react-router-dom'

function SideNavigation() {
    return (

        <nav className="nav flex-column col-3" >
            <ul className="list-unstyled">
                <li className="nav-link active">
                    <Link to='/' className='text-decoration-none' >Home</Link>
                </li>
                <li className="nav-link">
                    <Link to='/completed' className='text-decoration-none' >Completed</Link>
                </li>
                <li className="nav-link">
                    <Link to='/deleted' className='text-decoration-none' >Deleted</Link>
                </li>
            </ul>
        </nav>


    )
}

export default SideNavigation;