import TaskForm from './components/tasks/TaskForm'
import TaskList from './components/tasks/TaskList'


function App() {

  return (
    <main className='bg-zinc-900 min-h-screen max-h-full'>
      <div className='container mx-auto p-10'>
        <TaskForm />
        <TaskList />
      </div>
    </main>
  )
}

export default App


