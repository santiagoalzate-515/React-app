import "./TodoItem.css";
import {CompleteIcon} from "./CompleteIcon";
import { DelateIcon } from "./DelateIcon";


function TodoItem({text,completed,checked,delate}) {
    return(
        <div className="container-tarea-checked">
           
            
            {/* <span className={`Icon-checked ${completed && `Icon-checked-true`}`} 
            onClick={checked}
            >V</span>        */}

           <CompleteIcon
           Completed={completed}
           Checked={checked}
           />

            <p className={`tarea ${completed && `tarea-through`}`}>{text}</p>

            <DelateIcon
            Delate={delate}
            />
            {/* <span className="Icon-delate"
            onClick={delate}
            >X</span> */}

        </div>
    )
}

export{TodoItem};