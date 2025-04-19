import { Link } from "react-router-dom";

function Header() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Elearning  </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            <a className="nav-link" href="#">Course</a>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Teacher
              </a>
              <ul class="dropdown-menu">
                <Link className="dropdown-item" to="/teacher-login">Login</Link>
                <Link className="dropdown-item" to="/teacher-register">Register</Link>
                <hr className="dropdown-divider" />
                <Link className="dropdown-item" to="/teacher-dashboard">Dashboard</Link>
                <a className="dropdown-item" href="#">Logout</a>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                User
              </a>
              <ul class="dropdown-menu">
                <Link className="dropdown-item" to="/user-login">Login</Link>
                <Link className="dropdown-item" to="/user-register">Register</Link>
                <hr className="dropdown-divider" />
                <Link className="dropdown-item" to="/user-dashboard">Dashboard</Link>
                <a className="dropdown-item" href="#">Logout</a>
              </ul>
            </li>
            <Link className="nav-link" to="/about">About Us</Link>
          </div>
        </div>
      </div>
    </nav>
    );
  }
  
export default Header;