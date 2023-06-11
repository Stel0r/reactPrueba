import TaskForm from './TaskForm'
import TaskList from './TaskList'
import { tasks as data } from './tasks'
import { useState, useEffect } from 'react'


function App() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(data)
  }, [])

  function createTask(title) {
    setTasks([...tasks, {
      id: tasks.length,
      title,
      description: "esta es tu " + title
    }])
  }

  return (
    <>
      <TaskForm createFunc={createTask} />
      <TaskList tasks={tasks} />
    </>
  )
}

export default App


