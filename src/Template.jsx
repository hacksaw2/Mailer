import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Template = () => {
  return (
    <div>
      <NavLink to='/templates/template1'><div className="temmplate">1</div></NavLink>
     <NavLink to='/templates/template2'> <div className="template2">2</div></NavLink>

     <Outlet/>
    </div>
  )
}

export default Template
