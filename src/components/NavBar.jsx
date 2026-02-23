import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="container py-3">
            <ul className="nav nav-pills justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;