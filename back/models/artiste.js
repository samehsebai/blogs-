const mongoose = require("mongoose")
const artisteSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    dateNaiss:{
        type:String,
    },
    dateDeces:{
        type:String,
    },
    nationalite:{
        type:String,
    },
    biographie:{
        type:String,
    }


},{timestamps:true});
module.exports = mongoose.model("artiste",artisteSchema); 