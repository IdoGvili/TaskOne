import React from 'react';
import ToDo from './ToDo';
{/* renders the list */}
const ToDoList = ({toDoList, handleToggle, handleFilter,handleButton}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo}  handleButton={handleButton}/>
                )
            })}
			
        </div>
    );
};

export default ToDoList;