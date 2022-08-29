import { useEffect, useState } from "react";
import { getTaskById, updateTask } from "../../api/tasks";
import './Edit.css'

const Edit = ({
    taskId,
    setAction,
    onClose
}) => {

    const [editedTask, setEditetTask] = useState({
        title: '',
        start: '',
        startTime: '',
        endTime: ''
    });

    useEffect(() => {
        getTaskById(taskId)
            .then(res => setEditetTask(res))
    }, []);

    function onChangeHandler(e) {
        setEditetTask(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    const end = editedTask.start;
    const finalTask = { ...editedTask, end };

    async function onSubmit(e) {
        e.preventDefault();
        if (Object.values(finalTask).some(t => t === '')) {
            return alert('All fields are required!');
        }
        const res = await updateTask(taskId, finalTask);
        console.log(res);
        setAction('create');
    }

    return (
        <form onSubmit={onSubmit} className="edit-form">
            <label htmlFor="title">Task:</label>
            <input type="text" name="title" id="title" value={editedTask.title} onChange={onChangeHandler} />
            <label htmlFor="date">Date:</label>
            <input type="date" name="start" value={editedTask.start} onChange={onChangeHandler} />
            <label htmlFor="start-time">Start at:
            </label>
            <input type="time" name="startTime" value={editedTask.startTime} onChange={onChangeHandler} />
            <label htmlFor="endTime">End at:</label>
            <input type="time" name="endTime" value={editedTask.endTime} onChange={onChangeHandler} />
            <button>EDIT</button>
            <button onClick={onClose}>BACK</button>
        </form>
    );
}

export default Edit;