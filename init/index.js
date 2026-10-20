const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

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

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj)=>({
    ...obj, 
    owner:"6ad721969b9f2e2636a4a297"
  }));
  await Listing.insertMany(initData.data);
  console.log("Data was Initialized!");
};

initDB();
