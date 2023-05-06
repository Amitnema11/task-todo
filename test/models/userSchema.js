const mongoose = require("mongoose");

const userSchema= new mongoose.Schema({
    name:String,
    task:string,
    email:String,
    mobile:Number,
    id:string,
    selectu:String,
    taskn:string,
    

});

module.exports = mongoose.model("todo", userSchema);