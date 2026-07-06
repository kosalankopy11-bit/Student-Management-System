///Dashboard.jsx////

import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch students from backend
  const fetchStudents = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/students");
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.log("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          🎓 Student Dashboard
        </h1>

        <button
          onClick={fetchStudents}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Refresh
        </button>
      </div>

      {/* Loading */}
      {loading ? (
        <p className="text-gray-600">Loading students...</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {students.length === 0 ? (
            <p className="text-gray-600">No students found.</p>
          ) : (
            students.map((student) => (
              <div
                key={student.id}
                className="bg-white shadow-md rounded-lg p-4 border"
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  {student.name}
                </h2>

                <p className="text-gray-600">📧 {student.email}</p>
                <p className="text-gray-600">🎂 Age: {student.age}</p>

                <div className="mt-3 flex gap-2">
                  <button className="bg-yellow-400 px-3 py-1 rounded text-white hover:bg-yellow-500">
                    Edit
                  </button>

                  <button className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600">
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;