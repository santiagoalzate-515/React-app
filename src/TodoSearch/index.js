import React from "react";
import "./TodoSearch.css";


function TodoSearch({searchValue,setSearchValue}) {
    return(
        <div className="container-search">
            <input placeholder="ESCRIBE TU PRIMER NOTA"
            value={searchValue}
            onChange={(event)=>setSearchValue(event.target.value)}
            ></input>
        </div>
    )
}


export {TodoSearch};