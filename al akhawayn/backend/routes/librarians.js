const express = require("express");
const router = express.Router();
const Librarian = require("../models/Librarian");

// Get all librarians
router.get("/", async (req, res) => {
  try {
    const librarians = await Librarian.find();
    res.json(librarians);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
