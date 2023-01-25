const mongoose = require("mongoose")
const signatureSchema = new mongoose.Schema({
  localisationOeuvre:{
        type:String,
    },
    dec:{
        type:String,
    }
},{timestamps:true});
module.exports = mongoose.model("signature",signatureSchema); 