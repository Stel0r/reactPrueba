import { useContext } from 'react'
import TaskCard from './TaskCard'
import {TaskContext} from '../../context/TaskContext'

function TaskList() {

    const {tasks} = useContext(TaskContext)

    if (tasks.length === 0) {
        return <h1 className='text-white font-bold text-4xl text-center'>No hay Tareas, Crea Tu primera Tarea !</h1>
    }
    return (
        <div className='grid grid-cols-4 gap-2'>
            {tasks.map((el) => <TaskCard el={el} key={el.id} />)}
        </div>
    )
}
export default TaskList
