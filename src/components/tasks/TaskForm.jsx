import { useContext, useState } from 'react'
import { TaskContext } from '../../context/TaskContext'


function TaskForm() {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [error, setError] = useState(false)
    const createFunc = useContext(TaskContext).createTask

    function handleSubmit(e) {
        setError(false)
        e.preventDefault()
        if (title.trim() === "" || desc.trim() === "") {
            setError(true)
        } else {
            createFunc({ title, desc })
            setTitle("")
            setDesc("")
        }
    }

    return (
        <div className='max-w-md mx-auto'>
            <form className='bg-neutral-700 p-10 mb-4' action="" onSubmit={handleSubmit}>
                <p className='capitalize font-bold text-lg text-white mb-3'>Crea tu Tarea</p>
                <input className='bg-slate-300 p-3 w-full mb-2 placeholder-gray-600' placeholder='escribe tu Tarea' value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea className='bg-slate-300 p-3 w-full mb-2 placeholder-gray-600' placeholder='Escribe la descripcion de la Tarea' value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
                <button className='bg-blue-500 text-white px-3 py-1 rounded-md'>guardar</button>
                {error ? <p className='p-3 mx-2 my-3 bg-red-500 font-bold text-white text-xl rounded-md'>hay un campo vacio</p> : ""}
            </form>
        </div>
    )
}
export default TaskForm


