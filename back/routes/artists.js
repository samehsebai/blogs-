const router = require("express").Router();
const User = require("../models/User");
const artiste = require("../models/artiste");

//create
router.post("/", async(req,res)=>{
  const newArtiste = new artiste(req.body);
  try{
    const savedArtiste = await newArtiste.save();
    res.status(200).json(savedArtiste);
  }catch(err){
      res.status(500).json(err)
  }
});
//update
router.put("/:id", async(req,res)=>{
    try{
  
           const updateArtiste = await artiste.findByIdAndUpdate(req.params.id,{
               $set:req.body
           },{new:true});
           res.status(200).json(updateArtiste);
        }catch(err){
            res.status(500).json(err);
        
    }
    
  });
  //delete
  router.delete("/:id", async(req,res)=>{
    try{
        const artistes = await artiste.findById(req.params.id);
           await artistes.delete();
           res.status(200).json("artiste has been deleted ...");
        }catch(err){
            res.status(500).json(err);
     }
   
  });
  //getartiste
  router.get("/:id",async(req,res)=>{
      try{
        const artistes = await artiste.findById(req.params.id);
        res.status(200).json(artistes);
      }catch(err){
          res.status(500).json(err)
      }
  });
  //getAllartiste
  router.get("/",async(req,res)=>{
    try{
      const artistes = await artiste.find();
      res.status(200).json(artistes);
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router