const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  id: String,
  name: String,
  category: String,
  available: Boolean,
  description: String,
  picture: String,
});

module.exports = mongoose.model("Book", bookSchema);
