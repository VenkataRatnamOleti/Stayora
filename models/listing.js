const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Apartment, Flat, House, Villa, Hotel
const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    default:
      "https://images.pexels.com/photos/12377231/pexels-photo-12377231.jpeg",
    set: (v) =>
      v === ""
        ? "https://images.pexels.com/photos/12377231/pexels-photo-12377231.jpeg"
        : v, // Used with forms
  },
  price: {
    type: Number,
  },
  location: {
    type: String,
  },
  country: {
    type: String,
  },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
