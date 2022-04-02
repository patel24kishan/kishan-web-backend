// Written by - Kishan Kahodariya

const router = require("express").Router();
let Accomodation = require("../models/accomodation.model");

    router.route("/").get(async(req, res) => {
    console.log("simpleSearch");
    try{
            const accomodationList =  await Accomodation.find()
            return res.status(200).json({success:"true",message:"Users Retrieved",data:accomodationList});

        }catch(err){
            return res.status(500).json({success:"false",message:"Users Not Retrieved"});
        }
    });

    router.route("/simplesearch/:location").get(async(req, res) => {
    console.log("simplesearch with location")
     const usrLocation=req.params.location;
    try{
            const accomodationList =  await Accomodation.find({location:usrLocation})
            return res.status(200).json({success:"true",message:"Users Retrieved",data:accomodationList});
        }catch(err){
            console.log("")
            return res.status(500).json({success:"false",message:"Users Not Retrieved"});
        }
    });

module.exports = router;
