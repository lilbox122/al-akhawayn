const mongoose = require("mongoose");

const rentalSchema = new mongoose.Schema({
  bookId: { type: Number, required: true },
  studentEmail: { type: String, required: true },
  returnDate: { type: Date, required: true },
  rentedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Rental", rentalSchema);
