const mongoose = require("mongoose")
const acquisationSchema = new mongoose.Schema({
        proprietaire:{
        type:String,
    },   dateAcquisation:{
        type:String,
    },  lieuAcquisation:{
        type:String,
    },  prix:{
        type:String,
    },  moyenAcquisation:{
        type:String,
    },  preuveAchat:{
        type:String,
    },certification:{
        type:String,
    },
},{timestamps:true});
module.exports = mongoose.model("acquisation",acquisationSchema); 