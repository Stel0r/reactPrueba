import React from 'react'

function TaskCard({el,deleteFunc}) {
    return (
        <div>
            <h1>{el.title}</h1>
            <p>{el.description}</p>
            <button onClick={() => deleteFunc(el.id)}>Borrar Tarea</button>
        </div>)
}

export default TaskCard