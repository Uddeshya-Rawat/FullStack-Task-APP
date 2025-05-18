import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { TaskContext } from '../Context/TaskContexProvidert'
import { HiArrowNarrowLeft } from "react-icons/hi";





const AllTask = () => {

    const { allTask } = useContext(TaskContext)

    const navigate = useNavigate()


    // naviagte to task description
    const seeTask = (id) => {
        navigate(`/task/:${id}`)
    }


    return (
        <div className="h-screen bg-gradient-to-b from-[#08203e] to-[#557c93] text-white flex flex-col items-center px-4">
            <button className="flex absolute top-4 left-4 items-center gap-1 text-white poetsen-one-regular hover:text-teal-500"  onClick={()=>navigate('/')}>
              <HiArrowNarrowLeft className="text-lg" />
              Go Back
            </button>
            <div className='text-7xl myFont mt-12 text-center poetsen-one-regular '>All Tasks</div>
            {
                allTask.length < 1 ? <div className='flex flex-col gap-y-20 h-screen'>
                    <h1 className='text-2xl font-bold text-white-800 mt-14'>Empty Task List </h1>

                </div> : <div className='flex gap-2 overflow-hidden justify-between mt-15 '>
                    {allTask.map((task) => (
                        <div
                            key={task._id} // Assuming MongoDB `_id`
                            className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between mt-6 poetsen-one-regular"
                        >
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">{task.title}</h2>
                            </div>

                            <button className='border border-black rounded-lg text-gray-800 sm:hover:transition-transform duration-300 sm:hover:scale-103 mt-4 p-2 sm:hover:bg-gray-800 hover:text-white' onClick={() => seeTask(task._id)}>View Details</button>
                        </div>
                    ))}
                </div>
            }
            <NavLink to="/createTask"><button className="px-5 py-5 md:px-5 md:py-6 bg-gradient-to-l from-[#294861] to-[#294861]  font-extrabold rounded-lg text-white sm:font-extrabold sm:transition-transform sm:duration-200 sm:ease-out sm:hover:scale-105 poetsen-one-regular shadow-2xl sm:hover:shadow-black text-xl sm:hover:bg-none hover:bg-white  sm:hover:text-[#294861] mt-10 mb-8">
                Create Task
            </button></NavLink>
        </div>

    )
}

export default AllTask