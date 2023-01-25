const mongoose = require("mongoose")
const bibliographieSchema = new mongoose.Schema({
    publication:{
        type:String,
    }, titreOuvrage:{
        type:String,
    }, nomAuteur:{
        type:String,
    }, datePublication:{
        type:String,
    }, page:{
        type:String,
    }, editeur:{
        type:String,
    }
},{timestamps:true});
module.exports = mongoose.model("bibliographie",bibliographieSchema); 