import React from 'react'
import Button from './Button'

// const header = (title) => {
//    return (
//        <header>
//            <h1  style= {headingStyle}>{title}</h1>
//        </header>
//  )
// }

// const headingStyle = {
//     color : 'red' ,
//     backgroundColor : 'black'

// }

const header = ({ onAdd , showAdd}) => {
  
  
  return (
         <header className = 'header'>
           <h1>Task Tracker</h1>
           <Button color = {showAdd ?'#123C69' :'black' }
            text = {showAdd ?'Close' :'Add' } 
            onClick= {onAdd}/>
           
        </header>
       )
    
}


// default value can be added like this as well 
//header.defaultProps = {
  //  title : "task tracker from default through defaultprops obj variable"  ,
//}



export default header
