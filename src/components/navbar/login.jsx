import { Link } from "react-router-dom";

function Login(props) {
    return (
        <div className="text-end">
            <button type="button" className="btn btn-outline-success me-2">
                <Link to={"/login"}>Login</Link>
            </button>
        </div>
    );
}

export default Login;
