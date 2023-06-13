import { createContext, useState,useEffect } from 'react'
import { tasks as data } from '../data/tasks'


export const TaskContext = createContext()


export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([])


    function createTask(task) {
        setTasks([...tasks, {
            id: tasks.length,
            title: task.title,
            description: task.desc
        }])
    }


    useEffect(() => {
        setTasks(data)
    }, [])

    function deleteTask(taskId) {
        setTasks(tasks.filter((task) => task.id !== taskId).map((task, i) => {
            task.id = i
            return task
        }))
    }

    return (
        <TaskContext.Provider value={{
            createTask,
            deleteTask,
            tasks
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
