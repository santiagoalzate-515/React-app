import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const {addTodo,openModal,setopenModal}=React.useContext(TodoContext);
    const [newTodoValue,setNewTodoValue]=React.useState("");

    const onsubmit=()=>{
        setopenModal(false)
        addTodo(newTodoValue)
    }

    const oncancel=()=>{
        setopenModal(false)
    }

    const onchange=(event)=>{
        setNewTodoValue(event.target.value)
    }
    

    return(
        <form onSubmit={onsubmit}>
            <label>Escribe tu nuevo TODO</label>

            <textarea
            value={newTodoValue}
            onChange={onchange}
            ></textarea>

            <button
            onClick={()=>oncancel}
            >CANCELAR</button>

            <button>AÑADIR</button>

        </form>
    )
}

export{TodoForm};