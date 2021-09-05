import React from 'react'

const AddTask = () => {
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='add task'/>
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input type='text' placeholder='add day and time'/>
            </div>
            <div className='form-control'>
                <label>Set Reminder</label>
                <input type='checkbox' placeholder='add task'/>
            </div>
            <input type='submit' value='save'/>
        </form>
    )
}

export default AddTask