import logo from '../platzi.webp';
import './App.css';
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch';
import {TodoItem} from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import React, { useContext, useState } from 'react';
import { Todocontainer } from '../TodoItem/Todocontainer';
import { useLocalStorage } from '../TodoContext/useLocalStorage';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodosError } from '../TodosError';
import { TodoProvider } from '../TodoContext';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

// const listTodos = [ 
//   {Text:"cortar TOMATE",Commpleted:true},
//   {Text:"tomar el curso de React",Commpleted:false},
//   {Text:"llorar con la llorona",Commpleted:true},
//   {Text:"lalalalala",Commpleted:false},
//   {Text:"cortar TOMATE ",Commpleted:true},
//   {Text:"tomar el curso de React ",Commpleted:false},
//   {Text:"llorar con la llorona ",Commpleted:true},
//   {Text:"lalalalala ",Commpleted:false},
//   {Text:"cortar TOMATE  ",Commpleted:true},
//   {Text:"tomar el curso de React  ",Commpleted:false},
//   {Text:"llorar con la llorona  ",Commpleted:true},
//   {Text:"lalalalala  ",Commpleted:false},
//   {Text:"cortar TOMATE   ",Commpleted:true},
//   {Text:"tomar el curso de React   ",Commpleted:false},
//   {Text:"llorar con la llorona   ",Commpleted:true},
//   {Text:"lalalalala   ",Commpleted:false},
// ]


function App() {
  

  return (
    <TodoProvider>
      <TodoContext.Consumer>
        {(
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

        }
        )=>(
          <React.Fragment>

          <TodoCounter
          todocompleted={todoCompleted}
          todototal={todoTotal}
          />
    
          <TodoSearch
          searchvalue={searchValue}
          setsearchvalue={setSearchValue}
          />
    
    
          <Todocontainer>
            {error && <TodosError/>}
            {loading && <TodosLoading/>}
            {(!loading && !error && searchTodos.length==0)&& <EmptyTodos/>}
    
            {searchTodos.map(
              (todo)=><TodoItem
                key={todo.Text}
                text={todo.Text}
                completed={todo.Commpleted}
                checked={()=>todoChecked(todo.Text)}
                delate={()=>todoDelate(todo.Text)}
    
              />
            )}
          </Todocontainer>
           
          <CreateTodoButton/>
    
          {openModal && <Modal><TodoForm/></Modal>}
            
    
        </React.Fragment>
        )}
      </TodoContext.Consumer>
    </TodoProvider>
);
}

export default App;