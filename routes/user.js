const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

router.get("/signup",(req,res)=>{
    res.render("users/signup.ejs");
});

module.exports =  router;