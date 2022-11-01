import { Link } from "react-router-dom";
import Login from "./navbar/login";
import Logout from "./navbar/logout";

function Navbar(props) {
    let logButton = null;
    if (props.logged) {
        logButton = <Logout />;
    } else {
        logButton = <Login />;
    }
    return (
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a
                        href="/"
                        className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
                    >
                        <svg
                            className="bi me-2"
                            width="40"
                            height="32"
                            role="img"
                            aria-label="Bootstrap"
                        ></svg>
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <Link to={"/"} className="nav-link px-2 text-white">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/producto"}
                                className="nav-link px-2 text-white"
                            >
                                Productos
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/categoria"}
                                className="nav-link px-2 text-white"
                            >
                                Categorias
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/usuario"}
                                className="nav-link px-2 text-white"
                            >
                                Usuarios
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/nosotros"}
                                className="nav-link px-2 text-white"
                            >
                                Nosotros
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/ejemplos"}
                                className="nav-link px-2 text-white"
                            >
                                Ejemplos
                            </Link>
                        </li>
                    </ul>
                    {logButton}
                </div>
            </div>
        </header>
    );
}

export default Navbar;
