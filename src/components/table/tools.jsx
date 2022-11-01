import UpdateTool from "./updateTool";
import editar from "./editar.png";
import eliminar from "./eliminar.png";

function Tools(props) {
    // id={row["id"]}
    // path={props.path}
    // tools={props.tools}
    let cell = <></>;
    if (props.tools && props.tools.length > 0) {
        props.tools.forEach((element) => {
            if (element == "update") {
                cell = (
                    <img src={editar} alt={"E"} width="20px" className="mx-1" />
                );
            }
        });
    }
    return (
        <td>
            {cell}
            {/* <img src={eliminar} alt={"E"} width="20px" /> */}
        </td>
    );
}

export default Tools;
