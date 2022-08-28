import { createTask, deleteTask } from '../../api/tasks';
import './Create.css'


const Create = () => {


    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const task = Object.fromEntries(formData)
        createTask(task);
        e.target.reset()
    }

    return (
        <div className="form-wrapper">
            <h2>ADD NEW TASK</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="title">
                    <input type="text" name="title" id="title" />
                </label>
                <label htmlFor="date">
                    <input type="date" name="date" />
                </label>
                <button>Add</button>
            </form>
        </div>
    );
}

export default Create;