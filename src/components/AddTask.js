import {useState} from 'react'

const AddTask = ({onAdd}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

const onSubmit = (e) => {
    
    //prevent browser refresh
    e.preventDefault()

   //if nothing in input
    if(!text) {
        alert('please add task')
        return
    }

    //add task: text, day, and reminder 
    onAdd({ text, day, reminder })

    //clear form
    setText('')
    setDay('')
    setReminder(false)
}

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                type='text' 
                placeholder='add task'/>
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input
                 value={day} 
                 onChange={(e) => setDay(e.target.value)} 
                type='text' 
                placeholder='add day and time'/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input 
                 value={reminder} 
                 onChange={(e) => setReminder(e.currentTarget.checked)} 
                checked={reminder}
                 type='checkbox' 
                placeholder='add task'/>
            </div>
            <input className='btn btn-block' type='submit' value='save'/>
        </form>
    )
}

export default AddTask