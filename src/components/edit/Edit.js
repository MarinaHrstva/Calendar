import { useEffect, useState } from "react";
import { getTaskById, updateTask } from "../../api/tasks";

const Edit = ({
    taskId,
    setAction
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
    }, [])

    function onChangeHandler(e) {
        setEditetTask(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

  async function onSubmit(e) {
        e.prevetDefault();

      const res = await updateTask(taskId, editedTask)
        setAction('create')
    }

    return (
        <form onSubmit={onSubmit} >
            <label htmlFor="title">Task:
                <input type="text" name="title" id="title" value={editedTask.title} onChange={onChangeHandler} />
            </label>
            <label htmlFor="date">Date:
                <input type="date" name="date" value={editedTask.start} onChange={onChangeHandler} />
            </label>
            <label htmlFor="start-time">Start at:
                <input type="time" name="start-time" value={editedTask.startTime} onChange={onChangeHandler} />
            </label>
            <label htmlFor="end-time">End at:
                <input type="time" name="end-time" value={editedTask.endTime} onChange={onChangeHandler} />
            </label>
            <button>Add</button>
        </form>
    );
}

export default Edit;