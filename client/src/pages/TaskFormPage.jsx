import { useForm } from "react-hook-form";
import { useTask } from "../context/TaskContext";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { date } from "zod";
dayjs.extend(utc);

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTask();
  const navigator = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue("date", dayjs.utc(task.date).format("YYYY-MM-DD"));
        
      }
    }

    loadTask();
  }, []);

  const onSubmit = handleSubmit((data) => {
    const dataValid = {
      ... data,
      date: data.data ? dayjs.utc(data.date).format() : dayjs.utc().format(),
    };
    dataValid.date = dayjs.utc(dataValid.date).format();

    if (params.id) {
      updateTask(params.id, dataValid);
    }else{
      createTask(dataValid);
    }

    navigator("/tasks");
  });

  return (
    <div className="flex flex-col justify-center items-center bg-white h-[100vh]">
      <div className="bg-zinc-400 max-w-md w-full p-10 rounded-md">
        <h1 className="text-2xl font-bold mb-4 text-black">Create Task</h1>
        <div className="flex justify-between items-center mb-4">
          <form onSubmit={onSubmit}>
            <label htmlFor="title" className="text-black">
              Title
            </label>
            <input
              type="text"
              placeholder="title"
              {...register("title")}
              autoFocus
              className="w-full px-4 py-2 mt-5 border text-black border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="description" className="text-black">
              Description
            </label>
            <textarea
              row="3"
              placeholder="description"
              {...register("description")}
              className="w-full px-4 py-2 mt-5 border text-black border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <label htmlFor="date">Data</label>
            <input
              type="date"
              {...register("date")}
              className="w-full px-4 py-2 mt-5 border text-black border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full px-4 py-2 border bg-slate-600 border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TaskFormPage;
