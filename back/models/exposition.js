const mongoose = require("mongoose")
const expositionSchema = new mongoose.Schema({
  containtes:{
        type:String
    } , titre:{
        type:String
    } , lieu:{
        type:String
    } , date:{
        type:String
    } 
},{timestamps:true});
module.exports = mongoose.model("exposition",expositionSchema); 