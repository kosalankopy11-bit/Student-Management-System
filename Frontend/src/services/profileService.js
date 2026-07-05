
import axios from "axios";

const API_URL = "http://localhost:8000";

export const getProfile = async (studentId) => {
  return await axios.get(`${API_URL}/students/${studentId}`);
};

export const updateProfile = async (studentId, profileData) => {
  return await axios.put(
    `${API_URL}/students/${studentId}`,
    profileData
  );
};

export const createProfile = async (profileData) => {
  return await axios.post(
    `${API_URL}/students`,
    profileData
  );
};

export const deleteProfile = async (studentId) => {
  return await axios.delete(
    `${API_URL}/students/${studentId}`
  );
};