import React, { useContext, useEffect, useState } from 'react'
import { TaskContext } from '../Context/TaskContexProvidert'
import { useNavigate, useParams } from 'react-router-dom'
import { HiArrowNarrowLeft } from "react-icons/hi";

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


// update mark completed 
const markComplete=async()=>{
    try{
      const res=await fetch(`http://localhost:8000/updateTask/${cleanId}`,{
        method:"PATCH"
      })
      const task=await res.json()
      // update the state
      const updatedTasks = allTask.filter(task => task._id !== cleanId);
      setAllTask([...updatedTasks,task])
    
      

    }catch(error){
      console.log(error)
    }

    navigate(`/task/${id}`)
}

  return (
    <div className="h-screen bg-gradient-to-b from-[#08203e] to-[#557c93] text-white flex flex-col items-center px-4">
      <button className="flex absolute top-4 left-4 items-center gap-1 text-white poetsen-one-regular hover:text-teal-500"  onClick={()=>navigate('/allTask')}>
              <HiArrowNarrowLeft className="text-lg" />
              Go Back
            </button>
      <div className='border  flex flex-col items-center px-4 mt-14 rounded bg-blur text-white '>
        <h2 className="text-4xl myFont mt-12 text-center poetsen-one-regular "><span className=''>TITLE :</span> {selectedTask.title}</h2>
        <p className=" myFont mt-8 mb-7 text-center poetsen-one-regular"> {selectedTask.description}</p>

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
                markComplete()
                
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

