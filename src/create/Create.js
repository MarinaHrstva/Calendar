const Create = () => {


    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        console.log(Object.fromEntries(formData));
    }

    return (
        <div className="form-wrapper">
            <h2>Add New Event</h2>
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