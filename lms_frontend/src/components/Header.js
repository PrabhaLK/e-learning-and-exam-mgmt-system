import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">LearnPro</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link active" to="/all-courses">Courses</Link>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Teacher
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/teacher-login">Login</Link></li>
                                <li><Link className="dropdown-item" to="/teacher-register">Register</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/teacher-dashboard">Dashboard</Link></li>
                                <li><Link className="dropdown-item" to="/teacher-register">logout</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                user
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/user-login">User Login</Link></li>
                                <li><Link className="dropdown-item" to="/user-register">User Register</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/user-dashboard">Dashboard</Link></li>
                                <li><Link className="dropdown-item" to="/user-logout">logout</Link></li>
                            </ul>
                        </li>
                        
                        
                        <Link className="nav-link" to="/about">About us</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
