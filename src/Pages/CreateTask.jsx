
import React, { useContext, useState } from 'react'
import { TaskContext } from '../Context/TaskContexProvidert'
import { useNavigate } from 'react-router-dom'

const CreateTask = () => {
   const {setAllTask}=useContext(TaskContext)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const navigate=useNavigate()


  // send data to server
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:8000/createTask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, description })
    });

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Server did not return JSON");
    }

    const newTask = await res.json();
    console.log("Task created:", newTask);

    //  Update the context so UI reflects new task
    setAllTask(prevTasks => [...prevTasks, newTask]);

    // Clear inputs
    setTitle("");
    setDescription("");

  } catch (error) {
    console.error("Error:", error);
  }

  navigate("/allTask")
};


  return (
    <div className="min-h-screen bg-gradient-to-b from-[#08203e] to-[#557c93] flex items-center justify-center px-4">
      {/* Card container */}
      <form
        className="w-full max-w-lg bg-white/10 backdrop-blur rounded-2xl shadow-xl p-8 md:p-10 text-white"
        onSubmit={(e) => handleSubmit(e)} // add your handler
      >
        <h2 className="text-3xl font-bold mb-6 text-center poetsen-one-regular">Create New Task</h2>

        {/* Title */}
        <label htmlFor="title" className="block mb-2 font-lg poetsen-one-regular">
          Title
        </label>
        <input
          id="title"
          type="text"
          placeholder="Enter title"
          value={title}
          className="w-full mb-6 p-3 rounded-lg bg-gray-100 placeholder-black focus:outline-none focus:ring-2 focus:ring-teal-300 text-black"
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Description */}
        <label htmlFor="description" className="block mb-2 font-lg poetsen-one-regular">
          Description
        </label>
        <textarea
          id="description"
          rows={6}
          value={description}
          placeholder="Enter description"
          className="w-full mb-8 p-3 rounded-lg bg-gray-200 placeholder-black focus:outline-none focus:ring-2 focus:ring-teal-300 text-black"
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Submit button */}
        <button
          type="submit"
          className="w-full py-3 bg-teal-500 hover:bg-white hover:text-teal-400  transition rounded-lg font-semibold shadow-md sm:hover:shadow-gray-400 poetsen-one-regular"
        >
          Add Task
        </button>
      </form>
    </div>

  )
}

export default CreateTask