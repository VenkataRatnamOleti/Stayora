const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGODB_URL = "mongodb://127.0.0.1:27017/stayora";

async function main(){
    await mongoose.connect(MONGODB_URL);
}

main()
    .then(()=>{
        console.log("DB Connected Successfully!");
    })
    .catch(err => {
        console.log(err);
    });

const app = express()
const port = 8080;

app.listen(port,()=>{
    console.log("Server Started at " + port);
});

app.get("/testListing", async (req,res) => {
    let sampletListing = new Listing({
        title: "My New Villa",
        description: "By the beach",
        price: 1200,
        location: "Kakinada, Andhra Pradesh",
        country: "India"
    });

    await sampletListing.save();
    console.log("Sample was saved");
    res.send("Successfull Testing!");
});
app.get("/",(req,res)=>{
    res.send("Server Working!");
});