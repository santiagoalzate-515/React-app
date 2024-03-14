import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext=React.createContext();

function TodoProvider({children}) {

    const [searchValue,setSearchValue]=React.useState("");
    const {Item:Todos,saveItem:saveTodos,error,loading}=useLocalStorage(`TODOS_V1`,[]);
    const [openModal,setopenModal]=React.useState(false);

    const todoChecked=(text)=>{
    const newTodos=[...Todos]
    const todoIndex=newTodos.findIndex(
      (todo)=>todo.Text==text
    )
    newTodos[todoIndex].Commpleted=true;
    saveTodos(newTodos);
    }

    const todoDelate=(text)=>{
    const newTodos=[...Todos]
    const todoIndex=newTodos.findIndex(
      (todo)=>todo.Text==text
    )
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos);
    }

    const addTodo=(Text)=>{
        const newTodos=[...Todos];
        newTodos.push({
            Text,
            Commpleted:false
        })
        saveTodos(newTodos)
    }

    const searchTodos=Todos.filter(
    (todo)=>todo.Text.toLowerCase().includes(searchValue.toLowerCase())
    )

    const todoCompleted=Todos.filter(
    (todo)=>todo.Commpleted
    ).length

    const todoTotal=Todos.length;
    return(
        <TodoContext.Provider value={
            {
                searchValue,
                setSearchValue,
                Todos,
                saveTodos,
                error,
                loading,
                todoChecked,
                todoDelate,
                searchTodos,
                todoCompleted,
                todoTotal,
                openModal,
                setopenModal,
                addTodo

            }
        }>
            {children}
        </TodoContext.Provider>
    )
}

export{TodoContext,TodoProvider};