import { FiSearch, FiPlus } from "react-icons/fi";

const StudentToolbar = ({
  searchTerm,
  setSearchTerm,
  courseFilter,
  setCourseFilter,
  statusFilter,
  setStatusFilter,
  onAddStudent,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 mb-8">

      <div className="flex flex-col lg:flex-row gap-4 items-center">

        {/* Search */}
        <div className="relative flex-1 w-full">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

          <input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Course */}
        <select
          value={courseFilter}
          onChange={(e) => setCourseFilter(e.target.value)}
          className="border rounded-xl px-4 py-3 w-full lg:w-52"
        >
          <option value="">All Courses</option>
          <option>Computer Science</option>
          <option>Software Engineering</option>
          <option>Information Technology</option>
        </select>

        {/* Status */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border rounded-xl px-4 py-3 w-full lg:w-44"
        >
          <option value="">All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

        {/* Button */}
        <button
          onClick={onAddStudent}
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition w-full lg:w-auto"
        >
          <FiPlus />
          Add Student
        </button>

      </div>
    </div>
  );
};

export default StudentToolbar;