import { Link } from "react-router-dom";
import editar from "./editar.png";
import eliminar from "./eliminar.png";

function DeleteTool(props) {
    //props.path
    //props.id
    let url = props.path + "/delete/" + props.id;
    return (
        <Link to={url}>
            <img src={eliminar} alt={"E"} width="20px" className="mx-1" />
        </Link>
    );
}

export default DeleteTool;
