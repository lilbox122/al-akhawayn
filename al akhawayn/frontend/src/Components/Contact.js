import React, { useState } from "react";
import librariansDatabase from "../librariansDatabase"; // Import fake database
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
    source: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Request Sent: \nTitle: ${formData.title}\nAuthor: ${formData.author}\nISBN: ${formData.isbn}\nSource: ${formData.source}\nMessage: ${formData.message}`
    );
    setFormData({ title: "", author: "", isbn: "", source: "", message: "" });
  };

  return (
    <div className="contact-page">
      {/* Librarian Info Section */}
      <div className="librarian-info">
        <h2>Our Team</h2>
        <div className="librarian-cards">
          {librariansDatabase.map((librarian) => (
            <div key={librarian.id} className="librarian-card">
              <img src={librarian.picture} alt={librarian.name} />
              <h3>{librarian.name}</h3>
              <p>{librarian.role}</p>
              <p>Email: <a href={`mailto:${librarian.email}`}>{librarian.email}</a></p>
            </div>
          ))}
        </div>
      </div>

      {/* Book Request Form */}
      <div className="book-request-form">
        <h2>Request a Book</h2>
        <p>
          Please provide the title, author, ISBN, and a source link to help us
          procure the book for the library.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={formData.author}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="isbn"
            placeholder="ISBN Number"
            value={formData.isbn}
            onChange={handleChange}
            required
          />
          <input
            type="url"
            name="source"
            placeholder="Source Link"
            value={formData.source}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Additional Message (Optional)"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send Request</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
