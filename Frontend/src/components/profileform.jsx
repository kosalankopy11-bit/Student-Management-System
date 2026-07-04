
import React, { useState } from "react";

const ProfileForm = ({ profile, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    full_name: profile.full_name || "",
    email: profile.email || "",
    phone: profile.phone || "",
    date_of_birth: profile.date_of_birth || "",
    gender: profile.gender || "",
    course: profile.course || "",
    avatar_url: profile.avatar_url || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Edit Profile
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div className="flex justify-center">
          <img
            src={
              formData.avatar_url ||
              "https://via.placeholder.com/120"
            }
            alt="Profile"
            className="w-32 h-32 rounded-full border object-cover"
          />
        </div>

        <div>
          <label className="font-semibold">Profile Photo URL</label>

          <input
            type="text"
            name="avatar_url"
            value={formData.avatar_url}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mt-1"
          />
        </div>

        <div>
          <label className="font-semibold">Full Name</label>

          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mt-1"
            required
          />
        </div>

        <div>
          <label className="font-semibold">Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mt-1"
            required
          />
        </div>

        <div>
          <label className="font-semibold">Phone Number</label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mt-1"
          />
        </div>

        <div>
          <label className="font-semibold">Date of Birth</label>

          <input
            type="date"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mt-1"
          />
        </div>

        <div>
          <label className="font-semibold">Gender</label>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mt-1"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="font-semibold">Course</label>

          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mt-1"
          />
        </div>

        <div className="flex justify-end gap-3 mt-6">

          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Save Changes
          </button>

        </div>

      </form>

    </div>
  );
};

export default ProfileForm;