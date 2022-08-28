import { deleteTask } from "../../api/tasks";

const Details = ({
    task,
    action,
    setAction
}) => {

    function onEditHandler(e) {
        setAction('edit')
    }

    function onDeleteHandler() {
        deleteTask(task._id)
        setAction('create')
    }

    function onCloseHandler() {
        setAction('create')
    }

    return (
        <div className="details-container">
            <h3>{task.title}</h3>
            <p>Start at: {task.startTime}</p>
            <p>End at: {task.endTime}</p>
            <button onClick={onEditHandler}>Edit</button>
            <button onClick={onDeleteHandler}>Delete</button>
            <button className="closeBtn" onClick={onCloseHandler}>X</button>
        </div>
    );

}

export default Details;