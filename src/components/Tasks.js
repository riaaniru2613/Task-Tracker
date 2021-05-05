import React from 'react'
import Task from './task'

const Tasks = ({tasks,onDelete,OnToggle}) => {
    
    return (
        <div>
            {tasks.map((task)=> (
                <Task key={task.id} 
                task = {task} 
                onDelete = {onDelete} 
                OnToggle = {OnToggle}/>
            ))}

            
        </div>
    )
}


export default Tasks

