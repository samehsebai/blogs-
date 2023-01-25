const router = require("express").Router();
const User = require("../models/User");
const signature = require("../models/signature");

//create
router.post("/", async(req,res)=>{
  const newsignature = new signature(req.body);
  try{
    const savedsignature = await newsignature.save();
    res.status(200).json(savedsignature);
  }catch(err){
      res.status(500).json(err)
  }
});
//update
router.put("/:id", async(req,res)=>{
    try{
  
           const updatesignature = await signature.findByIdAndUpdate(req.params.id,{
               $set:req.body
           },{new:true});
           res.status(200).json(updatesignature);
        }catch(err){
            res.status(500).json(err);
        
    }
    
  });
  //delete
  router.delete("/:id", async(req,res)=>{
    try{
        const signatures = await signature.findById(req.params.id);
           await signatures.delete();
           res.status(200).json("signature has been deleted ...");
        }catch(err){
            res.status(500).json(err);
     }
   
  });
  //getsignature
  router.get("/:id",async(req,res)=>{
      try{
        const signatures = await signature.findById(req.params.id);
        res.status(200).json(signatures);
      }catch(err){
          res.status(500).json(err)
      }
  });
  //getAllsignature
  router.get("/",async(req,res)=>{
    try{
      const signatures = await signature.find();
      res.status(200).json(signatures);
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router