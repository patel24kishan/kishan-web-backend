// Written by - Kishan Kahodariya

const router = require("express").Router();
let Accomodation = require("../models/accomodation.model");

router.route("/").get(async(req, res) => {
//   res.send("simpleSearch");
  try{
        const accomodationList =  await Accomodation.find()
        return res.status(500).json({success:"true",message:"Users Retrieved",data:accomodationList});

    }catch(err){
        return res.status(500).json({success:"false",message:"Users Not Retrieved"});
    }
});

module.exports = router;
