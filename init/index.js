const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = "";
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

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

  for(let obj of initData.data){
    let response = await geocodingClient
    .forwardGeocode({
      query: obj.location,
      limit: 2,
    })
    .send();

    let geometry = response.body.features.length > 0 
      ? response.body.features[0].geometry 
      : { type: "Point", coordinates: [0, 0] };

    obj.owner = "6ad721969b9f2e2636a4a297";
    obj.geometry = geometry;
  }
  
  await Listing.insertMany(initData.data);
  console.log("Data was Initialized!");

  mongoose.connection.close();
};

initDB();
