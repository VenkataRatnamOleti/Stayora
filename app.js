const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

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

const sessionOptions = {
  secret: "mysuperscecretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 3 * 24 * 60 * 60 * 1000,
    maxAge: 3 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(flash());

app.listen(port, () => {
  console.log("Server Started at " + port);
});

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  next();
});

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);

app.get("/", (req, res) => {
  res.redirect("/listings");
});

app.all("*path", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).render("error.ejs", { message });
});
