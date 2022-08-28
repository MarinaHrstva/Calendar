import { createTask, deleteTask } from '../../api/tasks';
import { useNavigate } from 'react-router-dom'
import './Create.css'


const Create = ({
    isHidden
}) => {
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const task = {
            title: formData.get('title'),
            start: formData.get('date'),
            end: formData.get('date')
        }
        createTask(task);
        e.target.reset()
        navigate('/')

    }

    return (
        <div className="form-wrapper" style={{ display: isHidden ?  'none' :'flex'  }}>
            <h2>ADD NEW TASK</h2>
            <form onSubmit={onSubmit} >
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