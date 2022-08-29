import { deleteTask } from "../../api/tasks";
import './Details.css'

const Details = ({ task, setAction }) => {
  function onEditHandler(e) {
    setAction("edit");
  }

  function onDeleteHandler() {
    deleteTask(task._id);
    setAction("create");
  }

  function onCloseHandler() {
    setAction("create");
  }

  return (
    <div className="details-container">
      <div className="text-container">
        <h3>{task.title}</h3>
        <p>Start at: {task.startTime}</p>
        <p>End at: {task.endTime}</p>
      </div>
      <div className="buttons-container">
        <button onClick={onEditHandler}>Edit</button>
        <button onClick={onDeleteHandler}>Delete</button>
        <button className="closeBtn"
         onClick={onCloseHandler}>Back
        </button>
      </div>
    </div>
  );
};

export default Details;
