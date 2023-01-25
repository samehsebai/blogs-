const router = require("express").Router();
const User = require("../models/User");
const redactionNoticeInventaire = require("../models/redactionNoticeInventaire");

//create
router.post("/", async(req,res)=>{
  const newredactionNoticeInventaire = new redactionNoticeInventaire(req.body);
  try{
    const savedredactionNoticeInventaire = await newredactionNoticeInventaire.save();
    res.status(200).json(savedredactionNoticeInventaire);
  }catch(err){
      res.status(500).json(err)
  }
});
//update
router.put("/:id", async(req,res)=>{
    try{
  
           const updateredactionNoticeInventaire = await redactionNoticeInventaire.findByIdAndUpdate(req.params.id,{
               $set:req.body
           },{new:true});
           res.status(200).json(updateredactionNoticeInventaire);
        }catch(err){
            res.status(500).json(err);
        
    }
    
  });
  //delete
  router.delete("/:id", async(req,res)=>{
    try{
        const redactionNoticeInventaires = await redactionNoticeInventaire.findById(req.params.id);
           await redactionNoticeInventaires.delete();
           res.status(200).json("redactionNoticeInventaire has been deleted ...");
        }catch(err){
            res.status(500).json(err);
     }
   
  });
  //getredactionNoticeInventaire
  router.get("/:id",async(req,res)=>{
      try{
        const redactionNoticeInventaires = await redactionNoticeInventaire.findById(req.params.id);
        res.status(200).json(redactionNoticeInventaires);
      }catch(err){
          res.status(500).json(err)
      }
  });
  //getAllredactionNoticeInventaire
  router.get("/",async(req,res)=>{
    try{
      const redactionNoticeInventaires = await redactionNoticeInventaire.find();
      res.status(200).json(redactionNoticeInventaires);
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router