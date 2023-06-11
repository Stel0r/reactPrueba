import { tasks as lisTask } from './tasks'
import { useState, useEffect } from 'react'

function TaskList() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(lisTask)
    }, [])

    if (tasks.length === 0) {
        return
    }
    return (
        <div>
            {tasks.map((el, i) =>
                <div key={i}>
                    <h1>{el.title}</h1>
                    <p>{el.description}</p>
                </div>)}
        </div>
    )
}
export default TaskList
