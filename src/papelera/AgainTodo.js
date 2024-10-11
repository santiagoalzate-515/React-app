
import React from "react";
import {ReactComponent as CheckSVG} from "../TodoItem/check.svg";
import "./AgainTodo.css";
import { ModalCuestion } from "./ModalCuestion";


function AgainTodo({again,text}) {
    const [confirmVisible, setConfirmVisible] = React.useState(false);



    return(
        <div>
            <span className="Icon-checked-tamaño" onClick={() => setConfirmVisible(true)}
>
            <CheckSVG fill="gray"/>
        </span>
        {confirmVisible && <ModalCuestion>

            <div className="confirmacion-modal">
                <div className="container-modal">
                    <p className="text-modal">¿Estás seguro de que quieres regenerar la nota: <b className="negrilla-again">{text}</b>?</p>
                    <div className="container-buttoms-modal">
                        <button className="button-modal" onClick={() => { again(); setConfirmVisible(false); }}>Aceptar</button>
                        <button className="button-modal" onClick={() => setConfirmVisible(false)}>Cancelar</button>
                    </div>

                </div>
                
            </div>
        
    </ModalCuestion>}

        </div>    
        
        
    )
}

export{AgainTodo}