import { useState, useEffect } from "react";

const StudentForm = ({
  initialValues = null,
  onSubmit,
  loading = false,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    status: "Active",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialValues) {
      setFormData(initialValues);
    }
  }, [initialValues]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim())
      newErrors.fullName = "Full name is required";

    if (!formData.email.trim())
      newErrors.email = "Email is required";

    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";

    if (!formData.phone.trim())
      newErrors.phone = "Phone number is required";

    if (!formData.course)
      newErrors.course = "Select a course";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-sm border p-8 space-y-6"
    >
      {/* Full Name */}

      <div>
        <label className="block mb-2 font-medium">
          Full Name
        </label>

        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Email */}

      <div>
        <label className="block mb-2 font-medium">
          Email
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-3"
        />

        {errors.email && (
          <p className="text-red-500 text-sm mt-1">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}

      <div>
        <label className="block mb-2 font-medium">
          Phone
        </label>

        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-3"
        />

        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Course */}

      <div>
        <label className="block mb-2 font-medium">
          Course
        </label>

        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-3"
        >
          <option value="">Select Course</option>

          <option value="Computer Science">
            Computer Science
          </option>

          <option value="Software Engineering">
            Software Engineering
          </option>

          <option value="Information Technology">
            Information Technology
          </option>

        </select>

        {errors.course && (
          <p className="text-red-500 text-sm mt-1">
            {errors.course}
          </p>
        )}
      </div>

      {/* Status */}

      <div>

        <label className="block mb-2 font-medium">
          Status
        </label>

        <div className="flex gap-6">

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="status"
              value="Active"
              checked={formData.status === "Active"}
              onChange={handleChange}
            />
            Active
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="status"
              value="Inactive"
              checked={formData.status === "Inactive"}
              onChange={handleChange}
            />
            Inactive
          </label>

        </div>

      </div>

      {/* Buttons */}

      <div className="flex justify-end gap-4 pt-4">

        <button
          type="button"
          className="px-6 py-3 border rounded-xl"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
        >
          {loading ? "Saving..." : "Save Student"}
        </button>

      </div>

    </form>
  );
};

export default StudentForm;