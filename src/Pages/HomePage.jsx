import React from 'react'
import { NavLink } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
  <div className="h-screen bg-gradient-to-b from-[#08203e] to-[#557c93] text-white flex flex-col items-center px-4">
  {/* Header */}
  <div className="text-7xl myFont mt-15 text-center poetsen-one-regular ">
    Welcome to Task Management App
  </div>

  {/* Spacer to push buttons toward center */}
  <div className="flex flex-grow  items-center justify-center mt-10">
    <div className="space-x-4">
      <NavLink to="/allTask"><button className="px-10 py-5 md:px-14 md:py-6 bg-gradient-to-l from-[#294861] to-[#294861]  font-extrabold rounded-lg text-white sm:font-extrabold sm:transition-transform sm:duration-200 sm:ease-out sm:hover:scale-113 poetsen-one-regular shadow-2xl sm:hover:shadow-black text-2xl sm:hover:bg-none hover:bg-white  sm:hover:text-[#294861]">
        All Tasks
      </button></NavLink>
      <NavLink to="/createTask"><button className="px-10 py-5 md:px-14 md:py-6 bg-gradient-to-l from-[#294861] to-[#294861]  font-extrabold rounded-lg text-white sm:font-extrabold sm:transition-transform sm:duration-200 sm:ease-out sm:hover:scale-113 poetsen-one-regular shadow-2xl sm:hover:shadow-black text-2xl sm:hover:bg-none hover:bg-white  sm:hover:text-[#294861]">
        Create Task
      </button></NavLink>
    </div>
  </div>
</div>

    </>
  )
}

export default HomePage