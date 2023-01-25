const mongoose = require("mongoose")
const localisaionConservationSchema = new mongoose.Schema({
    lieu:{
        type:String,
    },placeDepot:{
        type:String,
    },modeStockage:{
        type:String,
    }
},{timestamps:true});
module.exports = mongoose.model("localisaionConservation",localisaionConservationSchema); 