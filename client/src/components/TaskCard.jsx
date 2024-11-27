import { useTask } from '../context/TaskContext';
import {Link } from 'react-router-dom';

function TaskCard({ task, onDelete, onDetails }) {
  const{deleteTask} =  useTask();

  return (
      <div className=" bg-stone-300 p-6 rounded-md shadow-sm cursor-pointer border-2 border-gray-50 hover:border-black hover:border-2 transition-colors duration-300">
          <div className=" border-l-4 border-blue-600 pl-4">
            <h4 className="font-bold text-xl text-black">{task.title}</h4>
            <p className="text-gray-700 h-24 overflow-hidden overflow-ellipsis whitespace-nowrap">{task.description}</p>
            <p className="text-gray-600 mt-2">{new Date(task.date).toLocaleDateString()}</p>
          </div>
        {/* Botones para eliminar y ver detalles */}
        <div className="flex justify-between p-4 border-t">
          <button
            onClick={()=>{
              deleteTask(task._id);
            }}
            className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600 focus:outline-none"
          >
            Eliminar
          </button>
          <Link to={`/tasks/${task._id}`} className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 focus:outline-none">
            Editar
          </Link>
          
        </div>
      </div>
  );
}

export default TaskCard;