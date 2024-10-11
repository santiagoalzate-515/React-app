import React from "react";
import "./TodoButtonPapelera.css"
import { TodoContext } from "../TodoContext";

function TodoButtonPapelera() {
    const {settodopapelera}=React.useContext(TodoContext)
    return(
        <button className="boton-papelera"
        onClick={()=>settodopapelera(event=>!event)}

        >papelera</button>
    )
}

export {TodoButtonPapelera}
