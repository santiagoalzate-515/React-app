
import React from "react";



function TodoCounter({todocompleted,todototal}) {
    return(
        <div className="container-titulo">
            <h1 className="titulo">Has completado 
            <b className="numeronegrilla"> {todocompleted} </b>
            de
            <b className="numeronegrilla"> {todototal} </b>  
             TODOS
            </h1>
        </div>
    )
}

export {TodoCounter};