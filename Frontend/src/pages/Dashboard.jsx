// pages/Dashboard.jsx
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalCourses: 0,
    totalTeachers: 0
  });

  useEffect(() => {
    setStats({ totalStudents: 120, totalCourses: 15, totalTeachers: 8 });
  }, []);

  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Navbar />
        <div className="stats-cards">
          <div className="card">Students: {stats.totalStudents}</div>
          <div className="card">Courses: {stats.totalCourses}</div>
          <div className="card">Teachers: {stats.totalTeachers}</div>
        </div>
      </div>
    </div>
  );
}