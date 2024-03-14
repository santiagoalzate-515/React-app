import { TodoList } from "./TodoList";

function DelateIcon({Delate}) {
    return(
        <TodoList
            type="delate"
            color="gray"
            onclick={Delate}
        />
    )
}

export{DelateIcon};