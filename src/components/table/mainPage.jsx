import Table from "./table";
import CreateButton from "./createButton";
import SearchBar from "./searchBar";
import React, { useState } from "react";

function MainPage(props) {
    const [data, setData] = useState(props.data);
    return (
        <div>
            <div className="d-flex">
                <CreateButton path={props.path} className="mx-3" />
                <SearchBar
                    setData={setData}
                    data={props.data}
                    columns={props.columns}
                />
            </div>
            <Table
                name={props.name}
                columnsAlias={props.columnsAlias}
                columns={props.columns}
                data={data}
                path={props.path}
                tools={props.tools}
            />
        </div>
    );
}

export default MainPage;
