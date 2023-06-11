import TaskCard from './TaskCard'

function TaskList({ tasks,deleteFunc }) {
    if (tasks.length === 0) {
        return
    }
    return (
        <div>
            {tasks.map((el) => <TaskCard el={el} key={el.id} deleteFunc = {deleteFunc}/>)}
        </div>
    )
}
export default TaskList
