import { useTask } from "../context/TaskContext";
import { useEffect } from "react";
import TaskCard from "../components/TaskCard";

function TasksPage() {
  const { getTasks, tasks } = useTask();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) {
    return (
      <div className="w-1/2 mx-auto mt-10 text-black">
        <h1>No hay tareas</h1>
      </div>
    );
  }

  return (
    <div className=" flex items-center justify-center  py-16 ">
      <div className="w-11/12 sm:w-11/12 md:w-11/12 lg:w-9/12 bg-white p-6 rounded-lg shadow-sm ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {tasks.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TasksPage;
