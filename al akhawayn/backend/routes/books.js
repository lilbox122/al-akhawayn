const express = require("express");
const router = express.Router();
const Book = require("../models/Book");
const Rental = require("../models/Rental");



// Fetch all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    const formattedBooks = books.map(book => ({
      ...book.toObject(),
      id: String(book.id), // Ensure id is a string
    }));
    res.json(formattedBooks);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).send("Server error");
  }
});

// Fetch a single book by ID
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findOne({ id: req.params.id });
    if (!book) {
      return res.status(404).send("Book not found");
    }
    res.json(book);
  } catch (error) {
    console.error("Error fetching book:", error);
    res.status(500).send("Server error");
  }
});

//add a book
router.post("/add", async (req, res) => {
  const { name, category, description, picture } = req.body;

  if (!name || !category || !description || !picture) {
    console.error("Validation failed. Missing fields:", req.body);
    return res.status(400).send("All fields are required: Name, Category, Description, and Picture URL");
  }

  try {

    const newBook = new Book({
      id: Math.floor(Math.random() * 1000000),
      name,
      category,
      available: true, // Automatically set to true
      description,
      picture,
    });

    console.log("Attempting to save book:", newBook);
    await newBook.save();
    console.log("Book saved successfully:", newBook);

    res.status(201).json({ message: "Book added successfully", book: newBook });
  } catch (error) {
    console.error("Error while saving book to database:", error);
    res.status(500).send("Server error");
  }
});

//delete a book
router.delete("/delete/:id", async (req, res) => {
  try {
    const book = await Book.findOneAndDelete({ id: req.params.id }); // If 'id' is a custom field
    if (!book) {
      return res.status(404).send("Book not found");
    }
    res.status(200).json({ message: "Book deleted successfully", book });
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).send("Server error");
  }
});

//Rent a book
router.put("/:id/rent", async (req, res) => {
  const { id } = req.params;
  const { studentEmail, returnDate } = req.body;

  if (!studentEmail || !returnDate) {
    console.log("Missing student email or return date:", req.body);
    return res.status(400).send("Student email and return date are required.");
  }

  try {
    const book = await Book.findOne({ id });
    console.log("Book found:", book);

    if (!book) {
      console.log("Book not found for ID:", id);
      return res.status(404).send("Book not found.");
    }

    if (!book.available) {
      console.log("Book is not available for rent:", id);
      return res.status(400).send("Book is not available for rent.");
    }

    // Update book availability
    book.available = false;
    await book.save();

     // Create a rental record
     const rental = new Rental({
      bookId: id,
      studentEmail,
      returnDate,
    });
    console.log("Attempting to save rental record:", rental);

    await rental.save();
    console.log("Rental record saved successfully:", rental);

    res.status(200).json({ message: "Book rented successfully", rental });

  } catch (error) {
    console.error("Error renting book:", error);
    res.status(500).send("Server error");
  }
});

//return book
router.put("/:id/return", async (req, res) => {
  const { id } = req.params;
  const { studentEmail } = req.body;

  if (!studentEmail) {
    console.log("Missing student email:", req.body);
    return res.status(400).send("Student email is required.");
  }

  try {
    const book = await Book.findOne({ id });
    console.log("Book found:", book);

    if (!book) {
      console.log("Book not found for ID:", id);
      return res.status(404).send("Book not found.");
    }

    if (book.available) {
      console.log("Book is already available:", id);
      return res.status(400).send("Book is already returned.");
    }

    // Update book availability
    book.available = true;
    await book.save();

    // Remove the rental record
    const rental = await Rental.findOneAndDelete({ bookId: id, studentEmail });
    if (!rental) {
      console.log("Rental record not found for book ID and student email:", { id, studentEmail });
      return res.status(404).send("Rental record not found.");
    }

    console.log("Book returned and rental record removed:", rental);

    res.status(200).json({ message: "Book returned successfully", rental });
  } catch (error) {
    console.error("Error returning book:", error);
    res.status(500).send("Server error");
  }
});


module.exports = router;
