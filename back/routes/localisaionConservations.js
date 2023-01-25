const router = require("express").Router();
const User = require("../models/User");
const localisaionConservation = require("../models/localisaionConservation");

//create
router.post("/", async(req,res)=>{
  const newlocalisaionConservation = new localisaionConservation(req.body);
  try{
    const savedlocalisaionConservation = await newlocalisaionConservation.save();
    res.status(200).json(savedlocalisaionConservation);
  }catch(err){
      res.status(500).json(err)
  }
});
//update
router.put("/:id", async(req,res)=>{
    try{
  
           const updatelocalisaionConservation = await localisaionConservation.findByIdAndUpdate(req.params.id,{
               $set:req.body
           },{new:true});
           res.status(200).json(updatelocalisaionConservation);
        }catch(err){
            res.status(500).json(err);
        
    }
    
  });
  //delete
  router.delete("/:id", async(req,res)=>{
    try{
        const localisaionConservations = await localisaionConservation.findById(req.params.id);
           await localisaionConservations.delete();
           res.status(200).json("localisaionConservation has been deleted ...");
        }catch(err){
            res.status(500).json(err);
     }
   
  });
  //getlocalisaionConservation
  router.get("/:id",async(req,res)=>{
      try{
        const localisaionConservations = await localisaionConservation.findById(req.params.id);
        res.status(200).json(localisaionConservations);
      }catch(err){
          res.status(500).json(err)
      }
  });
  //getAlllocalisaionConservation
  router.get("/",async(req,res)=>{
    try{
      const localisaionConservations = await localisaionConservation.find();
      res.status(200).json(localisaionConservations);
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router