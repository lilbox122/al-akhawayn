import React, { useState, useContext } from "react";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import { BooksContext } from "../BooksContext";
import librariansDatabase from "../librariansDatabase";
import "./SignIn.css";

function SignIn() {
  const { signIn } = useAuth();
  const { books } = useContext(BooksContext);
  const [loginType, setLoginType] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email.endsWith("@aui.ma")) {
      setError("Only @aui.ma emails are allowed.");
      return;
    }

    setError("");

    if (loginType === "student") {
      await signIn();
      navigate("/student-dashboard");
    } else {
      const librarian = librariansDatabase.find((lib) => lib.email === email);
      if (librarian) {
        navigate("/admin-dashboard");
      } else {
        setError("You are not authorized as an employee.");
      }
    }
  };

  return (
    <div className="sign-in">
      <div className="sign-in-box">
        <h2>Sign In</h2>
        <div className="toggle">
          <button
            className={loginType === "student" ? "active" : ""}
            onClick={() => setLoginType("student")}
          >
            Student
          </button>
          <button
            className={loginType === "employee" ? "active" : ""}
            onClick={() => setLoginType("employee")}
          >
            Employee
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
        <input
          type="email"
          placeholder="Enter your university email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}

export default SignIn;
