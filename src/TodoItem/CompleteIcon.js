import { TodoList } from "./TodoList";

function CompleteIcon({completed,checked}) {
   return(
    <TodoList
    type="checked"
    color={completed ? `green` :`gray`}
    onclick={checked}
    />
   )
}

export{CompleteIcon};