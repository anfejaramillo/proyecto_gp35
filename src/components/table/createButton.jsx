import { Link } from "react-router-dom";

function CreateButton(props) {
    //props.path
    let url = props.path + "/create";
    return (
        <div className="mx-3">
            <Link to={url}>
                <button className="btn btn-success">Crear</button>
            </Link>
        </div>
    );
}

export default CreateButton;
