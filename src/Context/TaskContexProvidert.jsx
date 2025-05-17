import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const TaskContext = createContext();

// Context provider component
const TaskContextProvider = ({ children }) => {
  const [allTask, setAllTask] = useState([]);

  useEffect(() => {
    const getTask = async () => {
      try {
        const res = await fetch('http://localhost:8000/getTask');
        const task = await res.json();
        if (task.length < 1) {
          console.log("No task found");
        } else {
          setAllTask(task);
        }
      } catch (err) {
        console.log("Error fetching tasks", err);
      }
    };

    getTask();
  }, []);

  return (
    <TaskContext.Provider value={{allTask,setAllTask}}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
