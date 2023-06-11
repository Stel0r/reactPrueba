

function TaskList({tasks}) {
    if (tasks.length === 0) {
        return
    }
    return (
        <div>
            {tasks.map((el) =>
                <div key={el.id}>
                    <h1>{el.title}</h1>
                    <p>{el.description}</p>
                </div>)}
        </div>
    )
}
export default TaskList