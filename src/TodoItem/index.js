import "./TodoItem.css";
import {CompleteIcon} from "./CompleteIcon";
import { DelateIcon } from "./DelateIcon";



function TodoItem({text,completed,checked,delate}) {
    return(
        <div className="container-tarea-checked-initial">
            <div className="container-tarea-checked">
           

           <CompleteIcon
           completed={completed}
           checked={checked}
           />
           
          
           <div className="container-text">
           <p className={`tarea ${completed && `tarea-through`}`} >{text}</p>

           </div>

           <DelateIcon
           delate={delate}
           />

       </div>
        </div>
    
    )
}

export{TodoItem};