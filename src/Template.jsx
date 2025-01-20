import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Template = () => {
  return (
    <div>
          <div className='flex gap-1  justify-center'>
      <NavLink to='/templates/template1'><div className="temmplate w-[40vw] lg:w-[44vw] bg-gray-600 text-white text-center">Template1</div></NavLink>
     <NavLink to='/templates/template2'> <div className="temmplate w-[40vw] lg:w-[44vw] bg-gray-600 text-white text-center">Template2</div></NavLink>

     
    </div>
    <div className="outlet flex justify-center">
    <Outlet/>
    </div>
    </div>

  )
}

export default Template
