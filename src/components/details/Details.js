import { deleteTask } from "../../api/tasks";

const Details = ({
    task,
    action,
    setAction
}) => {

    function onEditHandler(e) {

    }

    function onDeleteHandler() {
        deleteTask(task._id)
        setAction('create')
    }

    return (
        <div className="details-container">
            <h3>{task.title}</h3>
            <p>Start at: {task.startTime}</p>
            <p>End at: {task.endTime}</p>
            <button>Edit</button>
            <button onClick={onDeleteHandler}>Delete</button>
            <button className="closeBtn">X</button>
        </div>
    );

}

export default Details;