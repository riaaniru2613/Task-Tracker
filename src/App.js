import  React,{useState,useEffect} from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Header from './components/header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks , setTasks] = useState([])

  useEffect(() => {
    const getTasks = async ()=>{
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  //Fetch Tasks
  const fetchTasks = async()=>{
  const res  = await fetch('http://localhost:8000/tasks')
  const data = await res.json()
  return data
}

//Fetch Task
//const fetchTask = async(id)=>{
 // const res  = await fetch(`http://localhost:8000/tasks/${id}`)
 // const data = await res.json()
 // return data
//}



const addTask = async(task) => {
  const res = await fetch('http://localhost:8000/tasks',{
    method : 'POST',
    headers :{
      'Content-type' : 'application/json',
    },
    body:JSON.stringify(task),
  })
  const data = await res.json()

  setTasks([...tasks,data])
}

const DeleteTask = async (id)=>{
  await fetch(`http://localhost:8000/tasks/${id}`,{
    method : 'DELETE',
  })
  setTasks(tasks.filter((task)=> task.id!==id))
}

const Reminder = async(id) =>{
  const taskToToggle = await fetch(id)
  const updateTask = {...taskToToggle,reminder: !taskToToggle.reminder}
  const res = await fetch(`http://localhost:8000/tasks/${id}`,{
    method : 'PUT' ,
    headers :{
      'Content-type' : 'application/json'
    },
    body : JSON.stringify(updateTask)

  })
  const data = res.json

  setTasks(tasks.map((task)=> 
  task.id === id  ? {...task , reminder : !data.reminder } : task))
}
const m =()=>{
  setShowAddTask(showAddTask=> !showAddTask)
  
}

  return (
    <Router>
    <div className = 'container'>
      <Header
          onAdd={m }
          showAdd={showAddTask}
        />
      
      <Route path='/' exact render={(props)=>(
        <>
        { showAddTask && <AddTask onAdd = {addTask}/> }
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {DeleteTask} OnToggle  = {Reminder}/> : 
        <h2>You Are Right On Schedule !</h2>}
        </>
      )}/>
      <Route path='/About' component={About}/>
      <Footer/>
    </div>
    </Router>
  )
}


export default App

