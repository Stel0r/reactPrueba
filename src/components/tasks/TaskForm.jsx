import {useState} from 'react'



function TaskForm({createFunc}) {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [error, setError] = useState(false)
    
    function handleSubmit(e){
        setError(false)
        e.preventDefault()
        if(title.trim() === "" || desc.trim() === ""){
            setError(true)
        }else{
            createFunc({title,desc})
            setTitle("")
            setDesc("")    
        }
    }

    return (<form action="" onSubmit={handleSubmit}> 
        {error?<p>hay un campo vacio</p>:""}
        <input placeholder='escribe tu Tarea' value = {title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea placeholder='Escribe la descripcion de la Tarea' value = {desc} onChange={(e) => setDesc(e.target.value)}></textarea>
        <button>guardar</button>
    </form>
    )
}
export default TaskForm


