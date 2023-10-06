// import React from 'react'
import React, { createContext, useState } from "react";
import Sidebar from './Sidebar'
import Workarea from './Workarea'
import Login from './Login'
import Tempwork from './Tempwork'
import Front from './Front'
import CreateGroup from './CreateGroup'
import { Outlet } from 'react-router-dom'
export const myContext = createContext();

const Maincontainer = () => {
  const [refresh, setRefresh] = useState(true);

  return (
    <div className='main'>
      <Sidebar/>
      <Outlet/>
      {/* <CreateGroup/> */}
      {/* <Workarea/> */}
      {/* <Front/> */}
      {/* <Login/> */}



    </div>
  )
}

export default Maincontainer