import  React,{useState} from 'react'
import Header from './components/header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'



// class App extends React.Component{
// render(){
//   return (
//     <div className = 'container'>
//     </div>
//   )
// }}


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks , setTasks] = useState([
    {
        id : 1,
        text :  'appointment',
        day : 'tuesday' ,
        reminder : true ,
    },
    {
        id : 2,
        text :  'school',
        day : 'friday' ,
        reminder : false ,
    },
    {
        id : 3,
        text :  'sleep',
        day : 'thursday' ,
        reminder : true ,
    }
])


const addTask = (task) => {
  const id = Math.floor(Math.random*1000)+1
  const NewTask =  {id ,...task}
  setTasks([...tasks,NewTask])
}

const DeleteTask = (id)=>{
  setTasks(tasks.filter((task)=> task.id!==id))
}

const Reminder = (id) =>{
  setTasks(tasks.map((task)=> 
  task.id === id  ? {...task , reminder : !task.reminder } : task))
}
const m =()=>{
  setShowAddTask(showAddTask=> !showAddTask)
  
}

  return (
    
    <div className = 'container'>
      <Header
          onAdd={m }
          showAdd={showAddTask}
        />
      { showAddTask && <AddTask onAdd = {addTask}/> }
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {DeleteTask} OnToggle  = {Reminder}/> : 
      <h2>You Are Right On Schedule !</h2>}
    </div>
  )
}


export default App

