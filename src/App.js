import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

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
]
)
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
