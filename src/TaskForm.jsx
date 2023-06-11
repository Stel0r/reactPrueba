import {useState} from 'react'


function TaskForm({createFunc}) {

    const [title, setTitle] = useState("")

    function handleSubmit(e){k
        e.preventDefault()
        
        createFunc(title)
    }

    return (<form action="" onSubmit={handleSubmit}>
        <input placeholder='escribe tu Tarea' onChange={(e) => setTitle(e.target.value)}/>
        <button>guardar</button>
    </form>
    )
}
export default TaskForm


