import React, { useContext, useEffect, useState } from 'react'
import { TaskContext } from '../Context/TaskContexProvidert'
import { useNavigate, useParams } from 'react-router-dom'

const TaskDetails = () => {
  const { allTask,setAllTask } = useContext(TaskContext)
  const { id } = useParams()
  const cleanId = id && id.startsWith(":") ? id.slice(1) : id   // id contains : remove it 
  const [selectedTask, setSelectedTask] = useState(null)
  const navigate=useNavigate()


  // select the task from allTasks using ID
  useEffect(() => {
    if (!allTask.length || !cleanId) return
    const task = allTask.find(t => t._id === cleanId)
    setSelectedTask(task ?? null)
  }, [allTask, cleanId])

  if (!selectedTask) {
    return <div>Loading task details or task not found...</div>
  }

  // delete Task
  const deleteTask = async () => {
  try {
   const res = await fetch(`http://localhost:8000/removeTask/${cleanId}`, {
      method: 'DELETE',
    });

    console.log(res.ok)
     if (res.ok) {
      // Remove the deleted task from state
      const updatedTasks = allTask.filter(task => task._id !== cleanId);
      setAllTask(updatedTasks);
    } else {
      console.log("Failed to delete task");
    }
  } catch (err) {
    console.error('Error deleting task', err);
  }
  navigate("/allTask")
  
};

  return (
    <div className="h-screen bg-gradient-to-b from-[#08203e] to-[#557c93] text-white flex flex-col items-center px-4">
      <div className='border text-[#08203e] flex flex-col items-center px-4 mt-14 rounded bg-white'>
        <h2 className="text-4xl myFont mt-12 text-center poetsen-one-regular "> {selectedTask.title}</h2>
        <p className=" myFont mt-12 text-center poetsen-one-regular"> {selectedTask.description}</p>

        <div className=' flex  gap-5'>
          {selectedTask.completed ? (
            <button
              disabled
              className="px-6 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 cursor-not-allowed mt-5 mb-5"
            >
              Completed
            </button>
          ) : (
            <button
              className="px-6 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 mt-5 mb-5"
              onClick={() => {
                // add your handler here to mark as completed
                alert('Mark as completed clicked');
              }}
            >
              Mark as Completed
            </button>
          )}
          <button
            className="px-6 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 mt-5 mb-5"
            onClick={() => {
              // add your handler here to mark as completed
              deleteTask()
              alert('Removed');
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaskDetails

