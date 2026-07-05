//Navbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={styles.navbar}>
      <h2 style={{ color: "white" }}>StudentMS 🎓</h2>

      <div style={styles.right}>
        <span style={{ color: "white", marginRight: "10px" }}>
          Admin
        </span>

        <button onClick={handleLogout} style={styles.button}>
          Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    height: "60px",
    backgroundColor: "#1e293b",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  },
  right: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    padding: "6px 12px",
    cursor: "pointer",
  },
};

export default Navbar;