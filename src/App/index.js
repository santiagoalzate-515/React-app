import './App.css';
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch';
import {TodoItem} from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import React from 'react';
import { Todocontainer } from '../TodoItem/Todocontainer';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodosError } from '../TodosError';
import { TodoProvider } from '../TodoContext';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoButtonPapelera } from '../papelera/TodoButtonPapelera';
import { Modal2 } from '../papelera/Modal2';
import { TodosBorrados } from '../papelera/TodosBorrados';
import { Todocontainer1 } from '../container/TodoContainer1';
import { ContainerInitial } from '../ContainerInitial/ContainerInitial';



function App() {
  
  return (
    <TodoProvider>
      <TodoContext.Consumer>
        {({searchValue,
            setSearchValue,
            error,
            loading,
            todoChecked,
            todoDelate,
            searchTodos,
            todoTotal,
            todoCompleted,
            openModal,
            setOpenModal,
            todopapelera
           
            
        })=>(<React.Fragment>

          <ContainerInitial>
          <TodoCounter
                                todoCompleted={todoCompleted}
                                todoTotal={todoTotal}
                            />



          <Todocontainer1>
          <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          />
    
    
          <Todocontainer>
            {error && <TodosError/>}
            {loading && <TodosLoading/>}
            {(!loading && !error && searchTodos.length==0)&& <EmptyTodos/>}
    
            {searchTodos.map(
              (todo)=><TodoItem
              
                key={todo.id}
                text={todo.Text}
                completed={todo.Commpleted}
                checked={()=>todoChecked(todo.Text)}
                delate={()=>todoDelate(todo.Text)}
    
              />
            )}


          </Todocontainer>

          <CreateTodoButton/>

          <TodoButtonPapelera/>
           
         
          </Todocontainer1>
    
         

          {openModal && <Modal><TodoForm/></Modal>}
          {todopapelera && <Modal2><TodosBorrados/></Modal2>}
          
          
          </ContainerInitial>
        </React.Fragment>)}
          
      </TodoContext.Consumer>
    </TodoProvider>
  )
}
  

        
export default App;