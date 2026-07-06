import {
  FiEye,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

const StudentTable = ({ students = [] }) => {

  if (students.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          No Students Found
        </h2>

        <p className="text-gray-500 mt-2">
          Try adjusting your search or add a new student.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

      <div className="overflow-x-auto">

        <table className="min-w-full">

          {/* Table Header */}

          <thead className="bg-gray-100">

            <tr>

              <th className="px-6 py-4 text-left">Student</th>

              <th className="px-6 py-4 text-left">Phone</th>

              <th className="px-6 py-4 text-left">Course</th>

              <th className="px-6 py-4 text-left">Status</th>

              <th className="px-6 py-4 text-center">Actions</th>

            </tr>

          </thead>

          <tbody>

            {students.map((student) => (

              <tr
                key={student.id}
                className="border-t hover:bg-gray-50 transition"
              >

                {/* Student */}

                <td className="px-6 py-5">

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">

                      {student.name
                        .split(" ")
                        .map(word => word[0])
                        .join("")}

                    </div>

                    <div>

                      <h3 className="font-semibold text-gray-800">
                        {student.name}
                      </h3>

                      <p className="text-gray-500 text-sm">
                        {student.email}
                      </p>

                    </div>

                  </div>

                </td>

                {/* Phone */}

                <td className="px-6 py-5">
                  {student.phone}
                </td>

                {/* Course */}

                <td className="px-6 py-5">

                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">

                    {student.course}

                  </span>

                </td>

                {/* Status */}

                <td className="px-6 py-5">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      student.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {student.status}
                  </span>

                </td>

                {/* Actions */}

                <td className="px-6 py-5">

                  <div className="flex justify-center gap-3">

                    <button className="text-blue-600 hover:bg-blue-100 p-2 rounded-lg">
                      <FiEye />
                    </button>

                    <button className="text-green-600 hover:bg-green-100 p-2 rounded-lg">
                      <FiEdit2 />
                    </button>

                    <button className="text-red-600 hover:bg-red-100 p-2 rounded-lg">
                      <FiTrash2 />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );

};

export default StudentTable;