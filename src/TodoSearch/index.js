import React from "react";
import "./TodoSearch.css";


function TodoSearch({searchvalue,setsearchvalue}) {
    return(
        <div className="container-search">
            <input placeholder="cortar cebolla"
            value={searchvalue}
            onChange={
                (text)=>setsearchvalue(text.target.value)
            }
            ></input>
        </div>
    )
}


export {TodoSearch};