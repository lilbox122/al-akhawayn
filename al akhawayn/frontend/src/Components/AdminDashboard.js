import React, { useState } from "react";
import axios from "axios";

function AdminDashboard() {
 
  const [bookId, setBookId] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const [name, setname] = useState('');
  const [categ, setcateg] = useState('');
  const [des, setdes] = useState('');  
  const [picurl, setpicurl] = useState('');

  const [feedback, setFeedback] = useState("");

  const handleAddBook = async (e) => {
    e.preventDefault(); // Prevent page reload
    try {
      const data = {
        name,
        category: categ, // Map to correct keys
        description: des,
        picture: picurl,
      };
      console.log("Data being sent:", data); // Log data being sent
      await axios.post("http://localhost:5000/api/books/add", data);
      setFeedback("Book added successfully!");
      setname("");
      setcateg("");
      setdes("");
      setpicurl("");
    } catch (error) {
      console.error("Error adding book:", error);
      setFeedback(error.response?.data || "Failed to add book.");
    }
  };
  

  const handleDeleteBook = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/books/delete/${id}`);
      console.log("Book deleted successfully:", response.data);
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };
  

  const handleRentBook = async () => {
    try {
      await axios.put(`http://localhost:5000/api/books/${bookId}/rent`, {
        studentEmail,
        returnDate,
      });
      console.log("Book rented successfully.");
    } catch (error) {
      console.error("Failed to rent book:", error);
    }
  };

  const handleReturnBook = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/books/${bookId}/return`, {
        studentEmail,
      });
      console.log("Book returned successfully:", response.data);
      setFeedback("Book returned successfully!");
    } catch (error) {
      console.error("Failed to return book:", error);
      setFeedback("Failed to return book.");
    }
  };
  

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {feedback && <p>{feedback}</p>}

      <h2>Add Book</h2>
      <form onSubmit={handleAddBook}>
        <input
          type="text"
          placeholder="Book Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <select 
          value={categ} 
          onChange={(e) => setcateg(e.target.value)}>
          <option value="" disabled>Select a category</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
          <option value="Technology">Technology</option>
          <option value="Art">Art</option>
          <option value="Literature">Literature</option>
        </select>
        <input
          type="text"
          placeholder="Description"
          value={des}
          onChange={(e) => setdes(e.target.value)}
        />
        <input
          type="text"
          placeholder="Picture URL"
          value={picurl}
          onChange={(e) => setpicurl(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>

      <h2>Remove Book</h2>
      <input
        type="text"
        placeholder="Book ID"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
      />
      <button onClick={() => handleDeleteBook(bookId)}>Remove Book</button>

      <div>
        <h2>Rent Book</h2>
        <input
          type="text"
          placeholder="Book ID"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Student Email"
          value={studentEmail}
          onChange={(e) => setStudentEmail(e.target.value)}
        />
        <input
          type="date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />
        <button onClick={handleRentBook}>Rent Book</button>
      </div>

      <h2>Return Book</h2>
      <input
        type="text"
        placeholder="Book ID"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Student Email"
        value={studentEmail}
        onChange={(e) => setStudentEmail(e.target.value)}
      />
      <button onClick={handleReturnBook}>Return Book</button>
    </div>
  );
}

export default AdminDashboard;
