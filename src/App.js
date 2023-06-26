import React, { useState } from 'react';
//mock data
import Data from "./Data.json";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';

function App() {
   {/* hard-coded list from json file */}
  const [ toDoList, setToDoList ] = useState(Data);

   {/* delete Button */}
  const handleButton = (id) => {
   {/*1: accepts task id and sets complete=true*/}	  
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
	{/*2: removes task when complete=true */}	
	let filtered = mapped.filter(task => {
      return !task.complete;
    });
    ;
	 setToDoList(filtered);
  }


  {/* accepts new task and resorts the list to place the new task according to it's date */}
  const addTask = (userInput ) => {
	  let before = toDoList.filter(task => {
      return task.dueMonth<userInput.date;
    });
	let after=  toDoList.filter(task => {
      return task.dueMonth>=userInput.date;
    });
   
	  {/* [ partial list before new date, new task, partial list after new date] also sets the task as new*/}
	  let copy = [...before,{ id: toDoList.length + 1, task: userInput.task, complete: false,dueMonth:userInput.date,new:true },...after];
    
    setToDoList(copy);
  }
  
  

  return (
    <div  className="App">
      <Header />
      <ToDoList toDoList={toDoList}  handleButton={handleButton}/>
      <ToDoForm addTask={addTask} />
	  
    </div>
  );
}

export default App;
