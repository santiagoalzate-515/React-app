import "./CreateTodoButton.css";
import React from "react";
import { TodoContext } from "../TodoContext";


function CreateTodoButton() {
    const {openModal,
        setopenModal}=React.useContext(TodoContext);
    return(
        <button className="boton"
        onClick={
            ()=>setopenModal(event=>!event)
        }
        >+</button>
    )
}

export{CreateTodoButton};