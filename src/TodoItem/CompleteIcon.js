import { TodoList } from "./TodoList";

function CompleteIcon({Completed,Checked}) {
    return(
        <TodoList
            type="checked"
            color={Completed ? `green` : `gray`}
            onclick={Checked}
        />
    )
}

export{CompleteIcon};