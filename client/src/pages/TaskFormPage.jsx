import {useForm} from 'react-hook-form'
import { useTask } from '../context/TaskContext';

function TaskFormPage() {

  const {register , handleSubmit} = useForm();
  const {tasks, createTask} = useTask();

  const onSubmit = handleSubmit((data) => {
    createTask(data);
  })

  return (
    <div className="flex flex-col justify-center items-center bg-white h-[100vh]">
      <div className='bg-zinc-400 max-w-md w-full p-10 rounded-md'>

      <h1 className='text-2xl font-bold mb-4 text-black' >Create Task</h1>
      <div className='flex justify-between items-center mb-4'>

      <form onSubmit={onSubmit}>
         <input type="text" placeholder='title' 
         {...register('title')}
         autoFocus
         className='w-full px-4 py-2 mt-5 border text-black border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
         />
         <textarea row="3" placeholder='description'
         {...register('description')}
         className='w-full px-4 py-2 mt-5 border text-black border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
         ></textarea>
         <button
         className='w-full px-4 py-2 border bg-slate-600 border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
         >Save</button>
      </form>
      </div>
        
      </div>


    </div>
  )
}

export default TaskFormPage