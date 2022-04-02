// Written by - Kishan Kahodariya

const router = require("express").Router();
let Accomodation = require("../models/accomodation.model");

router.route("/search").get((req, res) => {
  res.send("Here are the accomodations");
});



module.exports = router;
