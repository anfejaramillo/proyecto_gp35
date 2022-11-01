import { Link } from "react-router-dom";

function Login(props) {
    return (
        <div className="text-end">
            <Link to={"/login"}>
                <button type="button" className="btn btn-outline-success me-2">
                    Login
                </button>
            </Link>
        </div>
    );
}

export default Login;
