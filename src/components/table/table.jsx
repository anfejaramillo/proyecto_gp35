import Header from "./header";
import Body from "./body";

function Table(props) {
    //props.name
    //props.data
    //props.path
    //props.columns
    return (
        <table class="table">
            <caption>{props.name}</caption>
            <Header columns={props.columnsAlias} tools={props.tools} />
            <Body
                data={props.data}
                columns={props.columns}
                path={props.path}
                tools={props.tools}
            />
        </table>
    );
}

export default Table;
