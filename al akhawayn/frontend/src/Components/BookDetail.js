import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BooksContext } from "../BooksContext";
import "./BookDetail.css"; // Import CSS for styling

function BookDetail() {
  const { id } = useParams(); // Get book ID from the URL
  const { books } = useContext(BooksContext);

  const book = books.find((book) => book.id === id);

  if (!book) {
    return <div className="book-not-found">Book not found</div>;
  }

  return (
    <div className="book-detail">
      <h1 className="book-title">{book.name}</h1>
      <img
        src={book.picture || "/images/book-placeholder.jpg"}
        alt={book.name}
        className="book-detail-image"
      />
      <div className="book-details">
        <p className="book-description">{book.description}</p>
        <p className="book-category">Category: {book.category}</p>
        <p className={`book-status ${book.available ? "available" : "rented"}`}>
          Status: {book.available ? "Available" : "Rented"}
        </p>
      </div>
    </div>
  );
}

export default BookDetail;
