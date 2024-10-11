
import React from "react";
import "./TodoCounter.css"



function TodoCounter({todoCompleted,todoTotal}) {
    return(
        <div className="container-titulo">
            <h1 className="titulo">Has completado 
            <b className="numeronegrilla"> {todoCompleted} </b>
            de 
            <b className="numeronegrilla"> {todoTotal} </b>  
             notas
            </h1>
        </div>
    )
}

export {TodoCounter};