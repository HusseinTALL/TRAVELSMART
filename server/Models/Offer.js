const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema({
  departure: {
    type: String,
    required: true,
  },
  arrival: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  userId: {
    type: Number,
    required: true,
  },
});

const Offer = mongoose.model("offer", OfferSchema);

module.exports = Offer;
