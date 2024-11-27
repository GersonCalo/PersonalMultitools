import { createContext, useContext, useState } from "react";
import {
  createTaskRequest,
  getTasksRequest,
  deleteTaskRequest,
  getTaskRequest,
  updateTaskRequest
} from "../api/tasks";

const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask must be used within a TaskProvider");
  }
  return context;
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (tasks) => {
    const res = await createTaskRequest(tasks);
    console.log(res);
  };

  const deleteTask = async (id) => {
    try{
      const res = await deleteTaskRequest(id);
      if (res.status === 204)setTasks(tasks.filter(task => task._id !== id));
    }catch(error){
      console.log(error);
    }
  };

  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id);
      if (!res || !res.data) {
        console.error("Task not found");
        return null;
      }
      return res.data;
    } catch (error) {
      console.error("Error fetching task:", error);
      return null;
    }
  };

  const updateTask = async (id, task) => {
    try{
      await updateTaskRequest(id, task);
    }catch(error){
      console.log(error);
    }
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        getTasks,
        deleteTask,
        getTask,
        updateTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
