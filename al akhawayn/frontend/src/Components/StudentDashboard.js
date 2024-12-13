import React, { useContext } from "react";
import { BooksContext } from "../BooksContext";

function StudentDashboard() {
  const { books } = useContext(BooksContext);
  const rentedBooks = books.filter((book) => !book.available);

  return (
    <div>
      <h1>Welcome, Student!</h1>
      <h2>Your Rented Books:</h2>
      {rentedBooks.length > 0 ? (
        <ul>
          {rentedBooks.map((book) => (
            <li key={book.id}>
              {book.name} - {book.category}
              <p>Status: Not Available</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>You have not rented any books yet.</p>
      )}
    </div>
  );
}

export default StudentDashboard;
