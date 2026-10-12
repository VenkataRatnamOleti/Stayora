const mongoose = require("mongoose");
const { Passport } = require("passport");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const useSchema = new Schema({
    email:{
        type: String,
        required: true,
    }
});

const User = mongoose.Model("User",userSchema);
User.plugin(passportLocalMongoose);

module.exports = User;