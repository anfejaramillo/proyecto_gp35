import Tools from "./tools";
import Cell from "./cell";
function Row(props) {
    // rowData={row}
    // columns={props.columns}
    // path={props.path}
    // tools={props.tools}
    return (
        <tr>
            {props.columns.map(function (column, columnIndex) {
                return (
                    <Cell value={props.rowData[column]} index={columnIndex} />
                );
            })}
            <Tools
                id={props.rowData["id"]}
                path={props.path}
                tools={props.tools}
            />
        </tr>
    );
}

export default Row;
