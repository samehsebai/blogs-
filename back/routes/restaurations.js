const router = require("express").Router();
const User = require("../models/User");
const restauration = require("../models/restauration");

//create
router.post("/", async(req,res)=>{
  const newrestauration = new restauration(req.body);
  try{
    const savedrestauration = await newrestauration.save();
    res.status(200).json(savedrestauration);
  }catch(err){
      res.status(500).json(err)
  }
});
//update
router.put("/:id", async(req,res)=>{
    try{
  
           const updaterestauration = await restauration.findByIdAndUpdate(req.params.id,{
               $set:req.body
           },{new:true});
           res.status(200).json(updaterestauration);
        }catch(err){
            res.status(500).json(err);
        
    }
    
  });
  //delete
  router.delete("/:id", async(req,res)=>{
    try{
        const restaurations = await restauration.findById(req.params.id);
           await restaurations.delete();
           res.status(200).json("restauration has been deleted ...");
        }catch(err){
            res.status(500).json(err);
     }
   
  });
  //getrestauration
  router.get("/:id",async(req,res)=>{
      try{
        const restaurations = await restauration.findById(req.params.id);
        res.status(200).json(restaurations);
      }catch(err){
          res.status(500).json(err)
      }
  });
  //getAllrestauration
  router.get("/",async(req,res)=>{
    try{
      const restaurations = await restauration.find();
      res.status(200).json(restaurations);
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router