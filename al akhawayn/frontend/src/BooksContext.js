import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch books from the API
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api/books");
        setBooks(response.data);
        setError(null); // Clear error if successful
      } catch (error) {
        console.error("Error fetching books:", error);
        setError("Could not fetch books. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  // Update book availability
  const updateBookAvailability = async (id, available) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/books/${id}`, { available });
      if (response.status === 200) {
        setBooks((prevBooks) =>
          prevBooks.map((book) =>
            book.id === id ? { ...book, available } : book
          )
        );
      }
    } catch (error) {
      console.error("Error updating book availability:", error);
      setError("Could not update book availability. Please try again later.");
    }
  };

  // Add a new book
  const addBook = async (newBook) => {
    try {
      const response = await axios.post("http://localhost:5000/api/books", newBook);
      if (response.status === 201) {
        setBooks((prevBooks) => [...prevBooks, response.data]);
      }
    } catch (error) {
      console.error("Error adding book:", error);
      setError("Could not add book. Please try again later.");
    }
  };

  // Remove a book
  const removeBook = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/books/${id}`);
      if (response.status === 200) {
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
      }
    } catch (error) {
      console.error("Error removing book:", error);
      setError("Could not remove book. Please try again later.");
    }
  };

  // Rent a book
  const rentBook = async (id, studentEmail, returnDate) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/books/${id}/rent`, {
        studentEmail,
        returnDate,
      });
      if (response.status === 200) {
        setBooks((prevBooks) =>
          prevBooks.map((book) =>
            book.id === id ? { ...book, available: false } : book
          )
        );
      }
    } catch (error) {
      console.error("Error renting book:", error);
      setError("Could not rent book. Please try again later.");
    }
  };

  // Return a book
  const returnBook = async (id, studentEmail) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/books/${id}/return`, {
        studentEmail,
      });
      if (response.status === 200) {
        setBooks((prevBooks) =>
          prevBooks.map((book) =>
            book.id === id ? { ...book, available: true } : book
          )
        );
      }
    } catch (error) {
      console.error("Error returning book:", error);
      setError("Could not return book. Please try again later.");
    }
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        updateBookAvailability,
        addBook,
        removeBook,
        rentBook,
        returnBook,
        loading,
        error,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
