const mongoose = require("mongoose")
const pretSchema = new mongoose.Schema({
    institution:{
        type:String,
    },  nomExposition:{
        type:String,
    },  dateDepart:{
        type:String,
    },  DateRetour:{
        type:String,
    }
},{timestamps:true});
module.exports = mongoose.model("pret",pretSchema); 