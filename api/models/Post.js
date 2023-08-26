import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            unique:true
        },
        desc:{
            type:String,
            required:true,
        },
        photo:{
            type:String,
            required:false,
        },
        username:{
            type:String,
            required:true,            
        },
        category:{
            type: Array,
            required: false,
        },
    },
    { timestamps:true }
);

export default PostSchema
//module.exports = mongoose.model("Post", PostSchema)