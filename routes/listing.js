const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema");

const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join("\n");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// Index Route
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  }),
);

router.get("/new", (req, res) => {
  res.render("listings/new.ejs");
});

router.post(
  "/",
  validateListing,
  wrapAsync(async (req, res) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    req.flash("success","New Listing Created");
    res.redirect("/listings");
  }),
);

// Show Route
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs", { listing });
  }),
);

// Update Route
router.get(
  "/:id/edit",
  validateListing,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
  }),
);

router.put(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    if (!req.body.listing) {
      throw new ExpressError(400, "Send Valid Data");
    }
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
  }),
);

// Delete Route
router.delete(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
  }),
);

module.exports = router;
