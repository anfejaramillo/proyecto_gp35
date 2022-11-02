function Header(props) {
    //props.columns
    //props.tools
    let tools = undefined;
    if (props.tools && props.tools.length > 0) {
        tools = <th scope="col">Tools</th>;
    }
    return (
        <thead>
            <tr>
                {props.columns.map(function (value, index) {
                    return <th scope="col">{value}</th>;
                })}
                {tools}
            </tr>
        </thead>
    );
}

export default Header;
