import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <ul className="nav nav-pills justify-content-center">
                    <li className="nav-item d-flex">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;