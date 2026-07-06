import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Link ஐ இம்போர்ட் செய்துள்ளேன்
import { login } from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // லாகின் முயலும் போது பழைய எரரை கிளியர் செய்ய

    try {
      const response = await login(email, password);
      localStorage.setItem("token", response.access_token);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid Email or Password");
    }
  };

  // அழகான டிசைனுக்கான ஸ்டைல்கள்
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f4f7f6",
      fontFamily: "Arial, sans-serif",
    },
    card: {
      background: "#fff",
      padding: "40px",
      borderRadius: "10px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      width: "100%",
      maxWidth: "380px",
      boxSizing: "border-box",
    },
    title: {
      margin: "0 0 20px 0",
      color: "#333",
      textAlign: "center",
      fontSize: "24px",
    },
    inputGroup: {
      marginBottom: "20px",
    },
    input: {
      width: "100%",
      padding: "12px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "14px",
      boxSizing: "border-box",
      outline: "none",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      fontSize: "16px",
      cursor: "pointer",
      fontWeight: "bold",
    },
    error: {
      color: "#721c24",
      backgroundColor: "#f8d7da",
      border: "1px solid #f5c6cb",
      padding: "10px",
      borderRadius: "6px",
      marginBottom: "15px",
      fontSize: "14px",
      textAlign: "center",
    },
    footerText: {
      marginTop: "20px",
      textAlign: "center",
      fontSize: "14px",
      color: "#666",
    },
    link: {
      color: "#007bff",
      textDecoration: "none",
      fontWeight: "bold",
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>

        {error && <div style={styles.error}>{error}</div>}

        <form onSubmit={handleLogin}>
          <div style={styles.inputGroup}>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        {/* ரெஜிஸ்டர் பக்கத்துக்கு போறதுக்கான லிங்க் */}
        <p style={styles.footerText}>
          Don't have an account?{" "}
          <Link to="/register" style={styles.link}>
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
