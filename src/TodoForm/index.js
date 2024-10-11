import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css"

function TodoForm() {

    const {addTodo,setOpenModal}=React.useContext(TodoContext)
    let [newText,setNewText]=React.useState("")


    const onsubmit=()=>{
        setOpenModal(false)
    }
    const send=()=>{
        setOpenModal(false)
        
        {!newText ? newText=null :addTodo(newText)}
    }

    const onchange=(text)=>{
        setNewText(text.target.value)
    }

    return(
        <div className="form-container">
            <div>
            <form className="form" onSubmit={onsubmit}>
            <h2 className="titulo">ESCRIBE TU NOTA</h2>
            
            <textarea className="create-newText"
            
            value={newText}
            onChange={onchange}
            ></textarea>
            
           
            <div className="container-button">
                <button className="boton-container-button" onClick={send}>ENVIAR</button>
                <button className="boton-container-button" >CANCELAR</button>
            </div>
            
            </form>
            </div>
            </div>
    )
     
        
}

export{TodoForm}