//const mongoose = require("mongoose")
//do not use the code outcommended above with require, instead use the first code line with import
//export all Schemas by default and not module.export, use curly brackets for more than one Schema without command default if you need it
// in each step you want to import models (auth.js/post.js,...) from models folder to your controller or router files just use the schema as "UserSchema" as the constant you want to import

import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique: true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        reqired:true
    },
    profilePic: {
        type: String,
        default:"",
    },
    },
    { timestamps:true }
);

// const LocationSchema = new mongoose.Schema({
//     location:{
//         type:String,
//         required: true,
//         unique: true
//     },
//     },
//     { timestamps:true }
// );

export default UserSchema
//export { UserSchema, LocationSchema }
