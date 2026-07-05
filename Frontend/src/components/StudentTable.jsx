import { Pencil, Trash2 } from "lucide-react";

const formatDate = (value) => {
  if (!value) return "-";
  return new Date(value).toLocaleDateString();
};

const StudentTable = ({ students, loading, onEdit, onDelete }) => {
  if (loading) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center text-slate-500 shadow-sm">
        Loading students...
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">Student</th>
              <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">Student ID</th>
              <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">Contact</th>
              <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">Class</th>
              <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">DOB</th>
              <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">Status</th>
              <th className="px-5 py-4 text-right text-xs font-bold uppercase tracking-wide text-slate-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {students.length === 0 ? (
              <tr>
                <td colSpan="7" className="px-5 py-12 text-center text-sm text-slate-500">
                  No students found.
                </td>
              </tr>
            ) : (
              students.map((student) => (
                <tr key={student._id} className="transition hover:bg-slate-50">
                  <td className="whitespace-nowrap px-5 py-4">
                    <div className="flex items-center gap-3">
                      {student.imageUrl ? (
                        <img
                          src={student.imageUrl}
                          alt={`${student.firstName} ${student.lastName}`}
                          className="h-12 w-12 rounded-2xl object-cover"
                        />
                      ) : (
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-sm font-bold text-blue-700">
                          {student.firstName?.[0] || "S"}
                          {student.lastName?.[0] || ""}
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-slate-900">
                          {student.firstName} {student.lastName}
                        </p>
                        <p className="text-xs text-slate-500">{student.gender || "-"}</p>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm font-medium text-slate-700">{student.studentId}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">
                    <p>{student.email}</p>
                    <p className="text-xs text-slate-400">{student.phone || "-"}</p>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">{student.className}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">{formatDate(student.dateOfBirth)}</td>
                  <td className="whitespace-nowrap px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        student.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => onEdit(student)}
                        className="inline-flex items-center gap-1 rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                      >
                        <Pencil size={14} />
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => onDelete(student)}
                        className="inline-flex items-center gap-1 rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700"
                      >
                        <Trash2 size={14} />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
