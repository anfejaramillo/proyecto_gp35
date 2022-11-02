import UpdateTool from "./updateTool";
import DeleteTool from "./deleteTool";

function Tools(props) {
    // id={row["id"]}
    // path={props.path}
    // tools={props.tools}
    let tools = [];

    if (props.tools && props.tools.length > 0) {
        props.tools.forEach(function (element) {
            if (element === "update") {
                tools.push(<UpdateTool id={props.id} path={props.path} />);
            }

            if (element === "delete") {
                tools.push(<DeleteTool id={props.id} path={props.path} />);
            }
        });
    }
    return <td>{tools}</td>;
}

export default Tools;
