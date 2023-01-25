const mongoose = require("mongoose")
const PostSchema = new mongoose.Schema({
   title:{
        type:String,
        required:true,
        unique:true
    },
    nomPrenom:{
        type:String,
    },
    dateCreation:{
        type:String,
    },
    materiaux:{
        type:String,
    },
    support:{
        type:String,
    },
    dimensions2D:{
        type:String,
    },
    dimensions3D:{
        type:String,
    },
    poid:{
        type:String,
    },
    nbElements:{
        type:String,
    },
    numTirage:{
        type:String,
    },
    typeTirage:{
        type:String,
    },
    desc:{
        type:String,
        required:true,
        unique:true
    },
    
    photo:{
        type:String,
    },
    username:{
        type:String,
        required:true,
    },
    categories:{
        type:String,
    },
    artisteId:{
         type:String
    },
    acquisationId:{
        type: mongoose.Types.ObjectId,
        ref: "acquisation"
   },
   expositionId:{
    type: mongoose.Types.ObjectId,
    ref: "exposition"
    },
    localisaionConservationId:{
    type: mongoose.Types.ObjectId,
    ref: "localisaionConservation"
    },
    restaurationId:{
        type: mongoose.Types.ObjectId,
        ref: "exposition"
    },
    signatureId:{
        type: mongoose.Types.ObjectId,
        ref: "signature"
    },
    bibliographieId:{
        type: mongoose.Types.ObjectId,
        ref: "bibliographie"
    },
    
},{timestamps:true});
module.exports = mongoose.model("Post",PostSchema); 