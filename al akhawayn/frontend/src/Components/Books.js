import React, { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Add useNavigate
import { BooksContext } from "../BooksContext";
import "./Books.css";

function Books() {
  const { books } = useContext(BooksContext);
  const [filteredBooks, setFilteredBooks] = useState(books);
  const location = useLocation();
  const navigate = useNavigate(); // Hook to enable navigation
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");

    if (category) {
      setFilteredBooks(
        books.filter((book) => book.category.toLowerCase() === category.toLowerCase())
      );
    } else {
      setFilteredBooks(books);
    }
  }, [books, location.search]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const displayedBooks = filteredBooks.filter((book) =>
    book.name.toLowerCase().includes(searchTerm)
  );

  const handleBookClick = (id) => {
    navigate(`/books/${id}`); // Navigate to the book details page
  };

  return (
    <div className="books-page">
      <h1>Library Books</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Search books..."
          onChange={handleSearch}
          className="search-bar"
        />
      </div>
      <div className="books-grid">
        {displayedBooks.map((book) => (
          <div
            key={book.id}
            className="book-card"
            onClick={() => handleBookClick(book.id)} // Attach click event
          >
            <img
              src={book.picture || "/images/book-placeholder.jpg"}
              alt={book.name}
              className="book-image"
            />
            <h3>{book.name}</h3>
            <p>{book.category}</p>
            <p className={`availability ${book.available ? "available" : "rented"}`}>
              {book.available ? "Available" : "Rented"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
