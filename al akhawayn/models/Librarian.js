const mongoose = require("mongoose");

const librarianSchema = new mongoose.Schema({
  id: String,
  picture: String,
  name: String,
  role: String,
  email: String,
});

module.exports = mongoose.model("Librarian", librarianSchema);
