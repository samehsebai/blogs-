const router = require("express").Router();
const User = require("../models/User");
const exposition = require("../models/exposition");

//create
router.post("/", async(req,res)=>{
  const newexposition = new exposition(req.body);
  try{
    const savedexposition = await newexposition.save();
    res.status(200).json(savedexposition);
  }catch(err){
      res.status(500).json(err)
  }
});
//update
router.put("/:id", async(req,res)=>{
    try{
  
           const updateexposition = await exposition.findByIdAndUpdate(req.params.id,{
               $set:req.body
           },{new:true});
           res.status(200).json(updateexposition);
        }catch(err){
            res.status(500).json(err);
        
    }
    
  });
  //delete
  router.delete("/:id", async(req,res)=>{
    try{
        const expositions = await exposition.findById(req.params.id);
           await expositions.delete();
           res.status(200).json("exposition has been deleted ...");
        }catch(err){
            res.status(500).json(err);
     }
   
  });
  //getexposition
  router.get("/:id",async(req,res)=>{
      try{
        const expositions = await exposition.findById(req.params.id);
        res.status(200).json(expositions);
      }catch(err){
          res.status(500).json(err)
      }
  });
  //getAllexposition
  router.get("/",async(req,res)=>{
    try{
      const expositions = await exposition.find();
      res.status(200).json(expositions);
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router