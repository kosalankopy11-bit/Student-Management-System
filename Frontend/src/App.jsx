import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Registration from './pages/registration'
import Login from './pages/login'
import AddCourse from './pages/AddCourse'
import Profile from './pages/Profile'
import Courses from './pages/courses'
import Dashboard from './pages/Dashboard'
import Student from './pages/Student'
import EditCourse from './pages/EditCourse'

 
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/Login" replace />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/AddCourse" element={<AddCourse/>} />
      <Route path="/Courses" element={<Courses/>} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/Student" element={<Student/>} />
      <Route path="/EditCourse" element={<EditCourse/>} />
      <Route path="*" element={<Navigate to="/Login" replace />} />

    </Routes>
  </BrowserRouter>
  )
}

export default App
