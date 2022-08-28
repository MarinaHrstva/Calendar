const Details = ({
    task
}) => {

    return (
        <div className="details-container">
            <h3>{task.title}</h3>
            <p>Start at: {task.startTime}</p>
            <p>End at: {task.endTime}</p>
            <button>Edit</button>
            <button>Delete</button>
            <button className="closeBtn">X</button>
        </div>
    );

}

export default Details;