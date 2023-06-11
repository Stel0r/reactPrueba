import {useState} from 'react'


function TaskForm() {

    const [input, setInput] = useState("")

    return (<form action="" onSubmit={handleSubmit}>
        <input placeholder='escribe tu Tarea' onChange={(e) => setInput(e.target.value)}/>
        <button>guardar</button>
    </form>
    )
}
export default TaskForm

function handleSubmit(e){
    e.preventDefault()
}

