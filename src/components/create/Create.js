import { createTask } from '../../api/tasks';

import './Create.css'


const Create = ({
    setTasks
}) => {

    async function onSubmit(e) {


        e.preventDefault();

        const formData = new FormData(e.target)
        const task = {
            title: formData.get('title'),
            start: formData.get('date'),
            end: formData.get('date'),
            startTime: formData.get('start-time'),
            endTime: formData.get('end-time'),
        }

        if (Object.values(task).some(t => t === '')) {
            return alert('All fields are required!')
        }

        createTask(task)
            .then(res => {
                setTasks(state=>[...state,res])
            })

    }

    return (
        <div className="form-wrapper" >
            <h2>ADD NEW TASK</h2>
            <form onSubmit={onSubmit} >
                <label htmlFor="title">Task:
                    <input type="text" name="title" id="title" />
                </label>
                <label htmlFor="date">Date:
                    <input type="date" name="date" />
                </label>
                <label htmlFor="start-time">Start at:
                    <input type="time" name="start-time" />
                </label>
                <label htmlFor="end-time">End at:
                    <input type="time" name="end-time" />
                </label>
                <button>Add</button>
            </form>
        </div>
    );
}

export default Create;