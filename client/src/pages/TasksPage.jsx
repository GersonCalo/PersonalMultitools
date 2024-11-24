import { useTask } from '../context/TaskContext'
import { useEffect } from 'react'

function TasksPage() {
  const {getTasks,tasks} = useTask();

  useEffect(() => {
    getTasks();
  }, [])

  if (tasks.length === 0) {
    return (
      <div className='w-1/2 mx-auto mt-10 text-black'>
        <h1>No hay tareas</h1>
      </div>
    )
  }

  return (
    <div className='w-1/2 mx-auto mt-10 text-black'>
      {tasks.map((task) => (
        <div key={task._id}>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        </div>
      ))}
    </div>
  )
}

export default TasksPage