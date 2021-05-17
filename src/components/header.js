import React from 'react'
import {useLocation as UseLocation} from 'react-router-dom'
import Button from './Button'

const header = ({ onAdd , showAdd}) => {
  const location = UseLocation()
  
  
  return (
         <header className = 'header'>
           <h1>Task Tracker</h1>
           {location.pathname==='/' && <Button color = {showAdd ?'#123C69' :'black' }
            text = {showAdd ?'Close' :'Add' } 
            onClick= {onAdd}/>}
           
        </header>
       )
    
}


export default header
