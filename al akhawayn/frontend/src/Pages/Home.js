import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { BooksContext } from "../BooksContext"; // Import BooksContext
import "./Home.css";

function Home() {
  const navigate = useNavigate(); // Navigation hook for routing
  const { books, loading, error } = useContext(BooksContext); // Access books from context

  const handleCategoryClick = (category) => {
    navigate(`/books?category=${category}`); // Navigate to the books section with category filter
  };

  // Filter and sort new arrivals (latest books by ID)
  const newArrivals = books
    .sort((a, b) => b.id - a.id) // Sort by descending ID
    .slice(0, 8); // Get the first 8 books

  return (
    <div className="home">
      {/* Banner Section */}
      <div className="banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1>Welcome to Al Akhawayn University Library</h1>
          <p>Your gateway to knowledge and learning.</p>
        </div>
      </div>

      {/* Explore Categories Section */}
      <div className="categories-section">
        <h2 className="categories-title">Explore Categories</h2>
        <div className="category-cards">
          <div
            className="card"
            onClick={() => handleCategoryClick("Science")}
            role="button"
          >
            <img src="/icons/science.png" alt="Science category" />
            <h3>Science</h3>
            <p>Dive into the world of science and discovery.</p>
          </div>
          <div
            className="card"
            onClick={() => handleCategoryClick("History")}
            role="button"
          >
            <img src="/icons/history.png" alt="History category" />
            <h3>History</h3>
            <p>Explore events that shaped the world.</p>
          </div>
          <div
            className="card"
            onClick={() => handleCategoryClick("Technology")}
            role="button"
          >
            <img src="/icons/technology.png" alt="Technology category" />
            <h3>Technology</h3>
            <p>Stay updated with the latest innovations.</p>
          </div>
          <div
            className="card"
            onClick={() => handleCategoryClick("Art")}
            role="button"
          >
            <img src="/icons/art.png" alt="Art category" />
            <h3>Art</h3>
            <p>Discover masterpieces and their creators.</p>
          </div>
          <div
            className="card"
            onClick={() => handleCategoryClick("Literature")}
            role="button"
          >
            <img src="/icons/literature.png" alt="Literature category" />
            <h3>Literature</h3>
            <p>Immerse yourself in timeless works of fiction.</p>
          </div>
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="new-arrivals">
        <h2>New Arrivals</h2>
        {loading ? (
          <p>Loading books...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="new-arrivals-list">
            {newArrivals.map((book) => (
              <div
                key={book.id}
                className="new-arrival-card"
                onClick={() => navigate(`/books/${book.id}`)} // Navigate to book detail page
              >
                <img
                  src={book.picture}
                  alt={`Cover of the book ${book.name}`}
                  className="new-arrival-image"
                />
                <h3>{book.name}</h3>
                <p>Category: {book.category}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
