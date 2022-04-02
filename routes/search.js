// Written by - Kishan Kahodariya

const router = require("express").Router();
let accomodation = require("../models/search.accomodation.model");

router.route("/").get((req, res) => {
  res.send("Here are the accomodations");
});

router.route("/search/:id").get((req, res) => {
 
});

module.exports = router;
