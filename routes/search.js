// Written by - Kishan Kahodariya

const router = require("express").Router();
let Accomodation = require("../models/accomodation.model");

router.route("/").get((req, res) => {
  res.send("Here are the accomodations");
});

router.route("/search/:target").get((req, res) => {
 
});

module.exports = router;
