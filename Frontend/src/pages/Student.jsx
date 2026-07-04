import StudentStats from "../../components/students/StudentStats";
import StudentToolbar from "../../components/students/StudentToolbar";
import StudentTable from "../../components/students/StudentTable";

export default function Students() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Students
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all registered students.
          </p>
        </div>

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg shadow"
        >
          + Add Student
        </button>

      </div>

      <StudentStats />

      <StudentToolbar />

      <StudentTable />

    </div>
  );
}