import React from 'react'
import {FaTimes} from 'react-icons/fa'


const task = ({task,onDelete,OnToggle}) => {
    return (
        <div className = {`task ${task.reminder ? 'reminder': ''}`} 
        onDoubleClick={()=> OnToggle(task.id)}>
            <h3>{task.text}<FaTimes
            style={{cursor :'pointer'}} 
            onClick ={()=> onDelete(task.id)}/></h3>
            
            <p>{task.day}</p>
            
        </div>
    )
}



export default task
