import TaskForm from './components/tasks/TaskForm'
import TaskList from './components/tasks/TaskList'
import { tasks as data } from './data/tasks'
import { useState, useEffect } from 'react'


function App() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(data)
  }, [])

  function createTask(task) {
    setTasks([...tasks, {
      id: tasks.length,
      title: task.title,
      description: task.desc
    }])
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId).map((task, i) => {
      task.id = i
      return task
    }))
  }

  return (
    <>
      <TaskForm createFunc={createTask} />
      <TaskList tasks={tasks}  deleteFunc = {deleteTask}/>
    </>
  )
}

export default App


