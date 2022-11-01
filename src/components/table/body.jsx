import Tools from "./tools";

function Body(props) {
    //data={props.data}
    //columns={props.columns}
    //path={props.path}
    //tools={props.tools}
    return (
        <tbody>
            {props.data.map(function (row, rowIndex) {
                return (
                    <tr>
                        {props.columns.map(function (column, columnIndex) {
                            if (columnIndex === 0) {
                                return <th scope="row">{row[column]}</th>;
                            }
                            return <td>{row[column]}</td>;
                        })}
                        <Tools
                            id={row["id"]}
                            path={props.path}
                            tools={props.tools}
                        />
                    </tr>
                );
            })}
            {/* <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
            </tr> */}
        </tbody>
    );
}

export default Body;
