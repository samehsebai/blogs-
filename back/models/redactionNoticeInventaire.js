const mongoose = require("mongoose")
const redactionNoticeInventaireSchema = new mongoose.Schema({
    nomReducteur:{
        type:String,
    },  dateRedaction:{
        type:String,
    },  dateModification:{
        type:String,
    }
},{timestamps:true});
module.exports = mongoose.model("redactionNoticeInventaire",redactionNoticeInventaireSchema); 