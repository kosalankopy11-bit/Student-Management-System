import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Registration from './pages/registration'
import Login from './pages/login'
import AddCourse from './pages/AddCourse'
import Profile from './pages/profile'
import Courses from './pages/courses'
import Dashboard from './pages/Dashboard'


 
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Registration />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/AddCourse" element={<AddCourse/>} />
      <Route path="/Courses" element={<Courses/>} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/Student" element={<Student/>} />
      <Route path="/EditCourse" element={<EditCourse/>} />

      


    </Routes>
  </BrowserRouter>
  )
}

export default App
