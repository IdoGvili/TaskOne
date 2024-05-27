import React, { useState } from 'react';


import "react-datepicker/dist/react-datepicker.css";

   const ToDoForm = ({ addTask}) => {
   
    const [ userInput, setUserInput ] = useState({
    "task": "",
    "date": "1"
  });	
  {/* handleChange and handleChangeDate update the state */}
    const handleChange = (e) => {
        setUserInput({task:e.currentTarget.value,date:userInput.date})
	 		
    }
	 const handleChangeDate = (e) => {
        setUserInput({date:e.currentTarget.value,task:userInput.task})	 		
    }
	{/* sends new task information to App.js and resets userInput */}
    const handleSubmit = (e) => {
        e.preventDefault();
		
        addTask(userInput);
		setUserInput({"task": "",
		"date": "1"})
       // setUserInput("");
    }
    return (<>
	<h3> New Task:</h3>
        <form onSubmit={handleSubmit}>
            <input value={userInput.task} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <button>Submit</button>
			<br></br>
			<label for="start">Due month:</label>
	
   <select onChange={handleChangeDate} name="month" id="month">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
	<option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
	<option value="9">9</option>
	<option value="10">10</option>
	<option value="11">11</option>
	<option value="12">12</option>
  </select>
   /2023
        </form>
		</>
    );
};

export default ToDoForm;