import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Maincontainer from './components/Maincontainer'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import Tempwork from './components/Tempwork'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Front from './components/Front'
import CreateGroup from './components/CreateGroup'
import Signup from './components/Signup'
import User_groups from './components/User_groups'
const App = () => {
  return (
    <div className='parentcontainer'>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='app' element={<Maincontainer/>}>
        <Route path='welcome' element={<Front/>}></Route>
        <Route path='chat/:_id' element={<Tempwork/>}></Route>
        <Route path='create-group' element={<CreateGroup/>}></Route>
        <Route path='user-group' element={<User_groups/>}></Route>
        </Route>
      </Routes> 
     {/* <Maincontainer/>
     <User_groups/>
     {/* <Login/> */}
     
      
      
     
      </div>
   
  )
}

export default App