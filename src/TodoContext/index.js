import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { LocalStoragePapelera } from "../papelera/LocalstoragePapelera";

const TodoContext=React.createContext()

function TodoProvider({children}) {
    const[searchValue,setSearchValue]=React.useState("")
    const{Item:Todos,saveItem:saveTodo,error,loading}=useLocalStorage([],'TODOS_V1')
    const[openModal,setOpenModal]=React.useState(false)
    const[todopapelera,settodopapelera]=React.useState(false)


    const{setItemBorrado:setTodoBorrado,itemBorrado:todoBorrado,
      saveItemPapelera:saveTodoPapelera,stringyItemPapelera}=LocalStoragePapelera('TODOS_V2',[])




  
    const todoChecked=(newText)=>{
      const newTodo=[...Todos]
      const todoIndex=newTodo.findIndex(
        (todo)=>todo.Text==newText
      )
      newTodo[todoIndex].Commpleted=true
      saveTodo(newTodo)
    }
  
    const todoDelate=(newText)=>{
      const newTodo=[...Todos]
      const todoIndex=newTodo.findIndex(
        (todo)=>todo.Text==newText
      )
      const [delatedTodo]=newTodo.splice(todoIndex,1)
      saveTodo(newTodo)

      todoSendPapelera(delatedTodo)
    }

    const todoDelatePapelera=(newText)=>{

      const newTodo=[...todoBorrado]
      const todoIndex=newTodo.findIndex(
        (todo)=>todo.Text==newText
      )
      newTodo.splice(todoIndex,1)
      saveTodoPapelera(newTodo)

      
    }

    const todoSendPapelera=(newText)=>{
      const todoPapelera=[...todoBorrado]
      todoPapelera.unshift(newText)
      
      saveTodoPapelera(todoPapelera)
    }


    const todoAgainPapelera=(newText)=>{
      addTodo(newText)
      todoDelatePapelera(newText)
    
    }
   
    
    const addTodo=(Text)=>{
      const id=Date.now()
      const newTodo=[...Todos]
      newTodo.unshift({
        Text,
        Commpleted:false,
        id:id
        
      })
      saveTodo(newTodo)
    }
  
    const searchTodos = Todos.filter(
      (todo)=>todo.Text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    )


  
    const todoTotal=Todos.length
  
    const todoCompleted=Todos.filter(
      (Todos)=>Todos.Commpleted
    ).length


  
    return(
        <TodoContext.Provider value={
            {searchValue,
                setSearchValue,
                Todos,
                saveTodo,
                error,
                loading,
                todoChecked,
                todoDelate,
                searchTodos,
                todoTotal,
                todoCompleted,
                openModal,
                setOpenModal,
                addTodo,
                todopapelera,
                settodopapelera,
                todoBorrado,
                setTodoBorrado,
                todoSendPapelera,
                todoDelatePapelera,
                todoAgainPapelera,stringyItemPapelera
                
            }
        }>
            {children}
        </TodoContext.Provider>
    )
}

export{TodoContext,TodoProvider}