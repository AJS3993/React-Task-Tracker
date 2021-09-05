import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = (props)  => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'meeting',
        day: 'Feb 6th at 1:30',
        reminder: false
    }
])

//add task
const addTask = (task) => {
  console.log(task)
}

//delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
}

//toggle reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
    task.id === id ? {...task, reminder: 
      !task.reminder} : task
      ))
}

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
     {tasks.length > 0 ? <Tasks 
     tasks={tasks} 
     onDelete={deleteTask}
     onToggle={toggleReminder}
     /> : 'No Tasks'}
    </div>
  );
}

export default App;
