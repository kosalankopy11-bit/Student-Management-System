import { useState } from "react";
import StudentStats from "../../components/students/StudentStats";
import StudentToolbar from "../../components/students/StudentToolbar";

const Students = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [courseFilter, setCourseFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const handleAddStudent = () => {
    console.log("Navigate to Add Student page");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Students
        </h1>

        <p className="text-gray-500 mt-2">
          Manage all registered students
        </p>
      </div>

      <StudentStats />

      <StudentToolbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        courseFilter={courseFilter}
        setCourseFilter={setCourseFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        onAddStudent={handleAddStudent}
      />

    </div>
  );
};

export default Students;