const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError.js");

const MONGODB_URL = "mongodb://127.0.0.1:27017/stayora";

async function main() {
  await mongoose.connect(MONGODB_URL);
}

main()
  .then(() => {
    console.log("DB Connected Successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));
app.engine("ejs", ejsMate);

app.listen(port, () => {
  console.log("Server Started at " + port);
});

// app.get("/testListing", async (req,res) => {
//     let sampletListing = new Listing({
//         title: "My New Villa",
//         description: "By the beach",
//         price: 1200,
//         location: "Kakinada, Andhra Pradesh",
//         country: "India"
//     });

//     await sampletListing.save();
//     console.log("Sample was saved");
//     res.send("Successfull Testing!");
// });

app.get("/", (req, res) => {
  res.redirect("/listings");
});

// Index Route
app.get(
  "/listings",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  }),
);

app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

app.post(
  "/listings",
  wrapAsync(async (req, res) => {
    // let { title, description, image, price, country, location } = req.body;
    if(!req.body.listing){
      throw new ExpressError(400,"Send Valid Data");
    }
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/");
  }),
);

// Show Route
app.get(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
  }),
);

// Update Route
app.get(
  "/listings/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
  }),
);

app.put(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    if(!req.body.listing){
      throw new ExpressError(400,"Send Valid Data");
    }
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
  }),
);

// Delete Route
app.delete(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
  }),
);

app.all("*path", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).render("error.ejs",{message});
});
