import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Header.css";

function Header() {
  const navigate = useNavigate(); // Hook to enable navigation

  const handleSignInClick = () => {
    navigate("/sign-in"); // Navigate to the Sign In page
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>Al Akhawayn University Library</h1>
      </div>
      <nav className="nav-container">
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/books">Books</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <button className="sign-in-button" onClick={handleSignInClick}>
          Sign In
        </button>
      </nav>
    </header>
  );
}

export default Header;
