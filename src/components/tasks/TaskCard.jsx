import { useContext } from "react"
import { TaskContext } from "../../context/TaskContext"

function TaskCard({el}) {

    const {deleteTask} = useContext(TaskContext)

    return (
        <div className="p-4 rounded-md bg-gray-700 text-white">
            <h1 className="text-xl font-bold capitalize">{el.title}</h1>
            <p  className="text-gray-400 text-sm">{el.description}</p>
            <button 
            className="bg-red-500 p-2 py-1 rounded-md mt-3 hover:bg-red-300" onClick={() => deleteTask(el.id)}>Borrar Tarea</button>
        </div>)
}

export default TaskCard