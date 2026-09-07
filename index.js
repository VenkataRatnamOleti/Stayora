const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const MONGODB_URL = "mongodb://127.0.0.1:27017/test";

async function main(){
    await mongoose.connect(MONGODB_URL);
}

main().then(()=>{
    console.log("DB Connected Successfully!");
}).catch(err => {
    console.log(err);
});

const app = express()
const port = 8080;

app.listen(port,()=>{
    console.log("Server Started at " + port);
});

app.get("/",(req,res)=>{
    res.send("Server Working!");
});