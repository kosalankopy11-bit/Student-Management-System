//Sidebar.jsx

import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <h3 style={{ marginBottom: "20px" }}>Menu</h3>

      <Link style={styles.link} to="/dashboard">
        Dashboard
      </Link>

      <Link style={styles.link} to="/courses">
        Courses
      </Link>

      <Link style={styles.link} to="/students">
        Students
      </Link>

      <Link style={styles.link} to="/profile">
        Profile
      </Link>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "200px",
    height: "100vh",
    backgroundColor: "#0f172a",
    color: "white",
    padding: "20px",
    position: "fixed",
    top: "60px",
    left: 0,
  },
  link: {
    display: "block",
    color: "white",
    textDecoration: "none",
    marginBottom: "15px",
    padding: "8px",
    borderRadius: "5px",
  },
};

export default Sidebar;