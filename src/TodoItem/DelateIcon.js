import { TodoList } from "./TodoList";

function DelateIcon({delate}) {
    return(
        <TodoList
        type="delate"
        color="gray"
        onclick={delate}
        />
       )
}

export{DelateIcon};