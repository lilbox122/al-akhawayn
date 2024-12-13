import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Books from "./Components/Books";
import BookDetail from "./Components/BookDetail";
import Contact from "./Components/Contact";
import SignIn from "./Components/SignIn";
import StudentDashboard from "./Components/StudentDashboard";
import AdminDashboard from "./Components/AdminDashboard";
import { BooksProvider } from "./BooksContext";

function App() {
  return (
    <div className="App">
      <BooksProvider>
        <Router>
          <Header />
          <main className="content">
            <Routes>
              {/* Route Definitions */}
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<Books />} />
              <Route path="/books/:id" element={<BookDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/student-dashboard" element={<StudentDashboard />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              {/* Catch-All Fallback (Optional) */}
              <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
          </main>
          <footer className="footer">© 2024 Al Akhawayn University</footer>
        </Router>
      </BooksProvider>
    </div>
  );
}

export default App;
