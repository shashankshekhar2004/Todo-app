import React, { useState } from 'react';
import './App.css';
import Todoinput from './components/Todoinput';
import TOdolist from './components/TOdolist';
function App() {
  const [listTodo, setListTodo] = useState([]); 

  const addList= (inputText) => {
    if(inputText!=="")
    setListTodo([...listTodo, inputText]);
  };
  const deleteListItem =(key)=>{
    let newListTodo =[...listTodo];
    newListTodo.splice(key,1);
    setListTodo([...newListTodo])
  };

  return (
    <div className='main-container'>
      <div className='centre-container'>
        <h1>My TODO LIST</h1>
        <Todoinput addList={addList} />
        <h1 className='app-heading'>TASKS</h1>
        <hr></hr>
        {listTodo.map((listItem,i)=>{
          return (
            <TOdolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
