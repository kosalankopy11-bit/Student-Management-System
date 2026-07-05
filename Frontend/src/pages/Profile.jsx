import React, { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import ProfileForm from "../components/ProfileForm";
import {
  getProfile,
  updateProfile,
} from "../services/profileService";

const Profile = () => {
  const studentId = 1;

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const response = await getProfile(studentId);
      setProfile(response.data);
    } catch (error) {
      console.error("Failed to load profile", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (updatedData) => {
    try {
      const response = await updateProfile(studentId, updatedData);

      setProfile(response.data);
      setEditing(false);

      alert("Profile Updated Successfully");
    } catch (error) {
      console.error(error);
      alert("Update Failed");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold text-center mb-8">
          Student Profile
        </h1>

        {!editing ? (
          <>
            <ProfileCard profile={profile} />

            <div className="mt-6 text-center">
              <button
                onClick={() => setEditing(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
              >
                Edit Profile
              </button>
            </div>
          </>
        ) : (
          <ProfileForm
            profile={profile}
            onSave={handleUpdate}
            onCancel={() => setEditing(false)}
          />
        )}

      </div>

    </div>
  );
};

export default Profile;