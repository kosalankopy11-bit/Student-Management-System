import axios from "axios";

const API = "http://127.0.0.1:8000/auth";

export const login = async (email, password) => {
  const response = await axios.post(
    `${API}/login`,
    {
      email,
      password,
    }
  );

  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};