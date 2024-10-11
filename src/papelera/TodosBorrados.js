import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoItemBorrados } from "./TodoItemBorrados";
import "./TodosBorrados.css"
import {ReactComponent as DelateSVG} from "../papelera/delate.svg";



function TodosBorrados() {

  const { todoBorrado,todoDelatePapelera,todoAgainPapelera,settodopapelera} = React.useContext(TodoContext);
  let localstorage_v2 =localStorage.getItem(`TODOS_V2`)

  const parsedStorage = JSON.parse(localstorage_v2);

  const cuestion=(Array.isArray(parsedStorage)&&parsedStorage.length === 0)
  
  return (
    
     
          <div className="container-tarea-checked-main">
            <div className={`container-container-trash ${cuestion && `container-container-trash-null`}`}>
            <div className="container-papelera">
              
                <div className="main-container-delate-text">
                  <div className="container-delate-text">
              
                  <span className={`container-button-papelere ${cuestion && `container-button-papelere-null`}`}>
                      <DelateSVG className="boton-delate-container"
                      onClick={()=>settodopapelera(false)}
                      
                      />
                  </span>
                  <h1 className={`titulo-papelera ${cuestion && `titulo-papelera-null`}`} >Notas Borradas</h1>
                  
                  </div>
                </div>

                    {todoBorrado.map((todo) => (
                      <TodoItemBorrados
                       key={todo.id}
                        text={todo.Text}
                        delate={()=>todoDelatePapelera(todo.Text)}
                        again={()=>todoAgainPapelera(todo.Text)}

                      />
                    ))}
                
              
                {(cuestion)&& <p className="null-papelera">No tienes notas en tu papelera...</p>}

          
          </div>
            </div>
           
           
          </div>
   
     
      
  );
}

export {TodosBorrados}

