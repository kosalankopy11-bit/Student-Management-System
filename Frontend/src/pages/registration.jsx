import { useState } from "react";
import axios from "axios";
import "./Registration.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (
      !formData.full_name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      return setMessage("Please fill all fields.");
    }

    if (formData.password.length < 6) {
      return setMessage("Password must be at least 6 characters.");
    }

    if (formData.password !== formData.confirmPassword) {
      return setMessage("Passwords do not match.");
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:8000/api/auth/register",
        {
          full_name: formData.full_name,
          email: formData.email,
          password: formData.password,
        }
      );

      setMessage(res.data.message);

      setFormData({
        full_name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      setMessage(err.response?.data?.detail || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">

        <div className="left-panel">
          <h1>Welcome!</h1>
          <p>Create your account and start your journey with us.</p>
        </div>

        <div className="right-panel">

          <h2>Create Account</h2>

          {message && <p className="message">{message}</p>}

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              value={formData.full_name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="password-box">
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? "Hide" : "Show"}
              </button>
            </div>

            <button className="register-btn" disabled={loading}>
              {loading ? "Creating..." : "Create Account"}
            </button>

          </form>

          <div className="bottom-text">
            Already have an account? <a href="/login">Login</a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Registration;