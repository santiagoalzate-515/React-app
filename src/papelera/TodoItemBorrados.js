import React from "react";
import "./TodoItemBorrados.css";
import { DelateIcon } from "../TodoItem/DelateIcon";
import { AgainTodo } from "./AgainTodo";



function TodoItemBorrados({text,delate,again}) {
    

    

    

    return(
        <div className="container-trash">
            <div className="container-tarea-checked">
            
            <span className="again-todo">    
            <AgainTodo 
            again={again}
            text={text}

            />
            </span>

            <p className="text">{text}</p>

            <span className="delate-icon">
            <DelateIcon 
            delate={delate}
            />
            </span>
            
            
        </div>

        
        </div>
        
    )
}

export { TodoItemBorrados };