const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Written by - Het Shah - B00886897 - het.shah@dal.ca

const accomodationSchema = new Schema({
  id: {
    type: String,
  },

  title: {
    type: String,
  },
  description: {
    type: String,
  },
  features: {
    type: String,
  },
  owner: {
    type: String,
  },
  imgUrl: {
    type: String,
  },
  contact: {
    type: String,
  },
  type: {
    type: String,
  },
  duration: {
    type: String,
  }
});

const accomodation = mongoose.model("accomodation", bookingSchema);

module.exports = Booking;
