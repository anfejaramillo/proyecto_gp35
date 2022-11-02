import React, { useState } from "react";
function SearchBar({ data, setData, columns }) {
    //setData={setData}
    //data={props.data}
    const [searchField, setSearchField] = useState("");
    let onChangeSearchField = (e) => {
        setSearchField(e.target.value);
        let results = Search(data, columns, e.target.value);
        setData(results);
    };
    return (
        <div className="d-flex w-100">
            <input
                type={"text"}
                className="form-control w-50"
                value={searchField}
                onChange={onChangeSearchField}
            />
            <button className="btn btn-success mx-3">Buscar</button>
        </div>
    );
}

function Search(data, columns, search) {
    let results = [];
    let included = false;
    data.forEach(function (value, index) {
        included = false;
        columns.forEach(function (column, indexColum) {
            if (
                value[column]
                    .toString()
                    .toLowerCase()
                    .indexOf(search.toString().toLowerCase()) >= 0 &&
                !included
            ) {
                results.push(value);
                included = true;
            }
        });
    });
    return results;
}

export default SearchBar;
