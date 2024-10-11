import "./CreateTodoButton.css";
import React from "react";
import { TodoContext } from "../TodoContext";



function CreateTodoButton() {
    const {setOpenModal}=React.useContext(TodoContext)

    return(
        <div>
            <button className="boton"onClick={()=>setOpenModal(event=>!event)}> 
            <img width="25" height="25" src="https://img.icons8.com/pastel-glyph/64/FFFFFF/add-webpage--v2.png" alt="add-webpage--v2"/>
            </button>
        </div>

        
    )
}

export{CreateTodoButton};