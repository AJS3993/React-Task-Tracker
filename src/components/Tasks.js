const tasks = [
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


const Tasks = () => {
    return (
        <>
            {tasks.map((task) => (
            <h3>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks
