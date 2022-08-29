import { deleteTask } from "../../api/tasks";
import './Details.css'

const Details = ({ task, setAction, onClose}) => {
  function onEditHandler(e) {
    setAction("edit");
  }

  function onDeleteHandler() {
    deleteTask(task._id);
    setAction("create");
  }



  return (
    <div className="details-container">
      <div className="text-container">
        <h3>{task.title}</h3>
        <p><span>Start at:</span> {task.startTime}</p>
        <p><span>End at:</span> {task.endTime}</p>
      </div>
      <div className="buttons-container">
        <button onClick={onEditHandler}>EDIT</button>
        <button onClick={onDeleteHandler}>DELETE</button>
        <button className="closeBtn"
         onClick={onClose}>BACK
        </button>
      </div>
    </div>
  );
};

export default Details;
