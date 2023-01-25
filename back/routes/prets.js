const router = require("express").Router();
const User = require("../models/User");
const pret = require("../models/pret");

//create
router.post("/", async(req,res)=>{
  const newpret = new pret(req.body);
  try{
    const savedpret = await newpret.save();
    res.status(200).json(savedpret);
  }catch(err){
      res.status(500).json(err)
  }
});
//update
router.put("/:id", async(req,res)=>{
    try{
  
           const updatepret = await pret.findByIdAndUpdate(req.params.id,{
               $set:req.body
           },{new:true});
           res.status(200).json(updatepret);
        }catch(err){
            res.status(500).json(err);
        
    }
    
  });
  //delete
  router.delete("/:id", async(req,res)=>{
    try{
        const prets = await pret.findById(req.params.id);
           await prets.delete();
           res.status(200).json("pret has been deleted ...");
        }catch(err){
            res.status(500).json(err);
     }
   
  });
  //getpret
  router.get("/:id",async(req,res)=>{
      try{
        const prets = await pret.findById(req.params.id);
        res.status(200).json(prets);
      }catch(err){
          res.status(500).json(err)
      }
  });
  //getAllpret
  router.get("/",async(req,res)=>{
    try{
      const prets = await pret.find();
      res.status(200).json(prets);
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router