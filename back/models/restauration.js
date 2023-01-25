const mongoose = require("mongoose")
const restaurationSchema = new mongoose.Schema({
    constat:{
        type:String,
    }, causes:{
        type:String,
    }, dateRestauration:{
        type:String,
    }, lieuRestauration:{
        type:String,
    }, nomRestauration:{
        type:String,
    }, typeIntervention:{
        type:String,
    }, materiaux:{
        type:String,
    }
},{timestamps:true});
module.exports = mongoose.model("restauration",restaurationSchema); 