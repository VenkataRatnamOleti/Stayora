const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js")

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


const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Data was Initialized!");
}

initDB();