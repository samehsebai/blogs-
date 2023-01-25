const router = require("express").Router();
const User = require("../models/User");
const acquisation = require("../models/acquisation");

//create
router.post("/", async(req,res)=>{
  const newAcquisation = new acquisation(req.body);
  try{
    const savedAcquisation = await newAcquisation.save();
    res.status(200).json(savedAcquisation);
  }catch(err){
      res.status(500).json(err)
  }
});
//update
router.put("/:id", async(req,res)=>{
    try{
  
           const updateAcquisation = await acquisation.findByIdAndUpdate(req.params.id,{
               $set:req.body
           },{new:true});
           res.status(200).json(updateAcquisation);
        }catch(err){
            res.status(500).json(err);
        
    }
    
  });
  //delete
  router.delete("/:id", async(req,res)=>{
    try{
        const acquisations = await acquisation.findById(req.params.id);
           await acquisations.delete();
           res.status(200).json("acquisation has been deleted ...");
        }catch(err){
            res.status(500).json(err);
     }
   
  });
  //getacquisation
  router.get("/:id",async(req,res)=>{
      try{
        const acquisations = await acquisation.findById(req.params.id);;
        res.status(200).json(acquisations);
      }catch(err){
          res.status(500).json(err)
      }
  });
 //getAllacquisation
 router.get("/",async(req,res)=>{
    try{
      const acquisations = await acquisation.find();
      res.status(200).json(acquisations);
    }catch(err){
        res.status(500).json(err)
    }
});
module.exports = router