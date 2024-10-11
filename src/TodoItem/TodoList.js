import {ReactComponent as CheckSVG} from "./check.svg";
import {ReactComponent as DelateSVG} from "./delate.svg";
import "./TodoList.css";

const library={
    "checked":(color)=><CheckSVG className="Icon-checked-tamaño" fill={color}/>,
    "delate":(color)=><DelateSVG className="Icon-delate-tamaño" fill={color}/>
}


function TodoList({type,color,onclick}) {
    return(
        <span className={`Icon-${type}`}
        onClick={onclick}
        >
            {library[type](color)}
        </span>
    )
}

export {TodoList}