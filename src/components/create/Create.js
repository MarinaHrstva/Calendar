import { createTask, deleteTask } from '../../api/tasks';

import './Create.css'


const Create = ({
    isHidden
}) => {

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const task = {
            title: formData.get('title'),
            start: formData.get('date'),
            end: formData.get('date'),
            startTime: formData.get('start-time'),
            endTime: formData.get('end-time'),
        }

        createTask(task);
        e.target.reset()

    }

    return (
        <div className="form-wrapper" style={{ display: isHidden ? 'none' : 'flex' }}>
            <h2>ADD NEW TASK</h2>
            <form onSubmit={onSubmit} >
                <label htmlFor="title">
                    <input type="text" name="title" id="title" />
                </label>
                <label htmlFor="date">
                    <input type="date" name="date" />
                </label>
                <label htmlFor="start-time">
                    <input type="time" name="start-time" />
                </label>
                <label htmlFor="end-time">
                    <input type="time" name="end-time" />
                </label>
                <button>Add</button>
            </form>
        </div>
    );
}

export default Create;