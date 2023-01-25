const router = require("express").Router();
const User = require("../models/User");
const bibliographie = require("../models/bibliographie");

//create
router.post("/", async(req,res)=>{
  const newbibliographie = new bibliographie(req.body);
  try{
    const savedbibliographie = await newbibliographie.save();
    res.status(200).json(savedbibliographie);
  }catch(err){
      res.status(500).json(err)
  }
});
//update
router.put("/:id", async(req,res)=>{
    try{
  
           const updatebibliographie = await bibliographie.findByIdAndUpdate(req.params.id,{
               $set:req.body
           },{new:true});
           res.status(200).json(updatebibliographie);
        }catch(err){
            res.status(500).json(err);
        
    }
    
  });
  //delete
  router.delete("/:id", async(req,res)=>{
    try{
        const bibliographies = await bibliographie.findById(req.params.id);
           await bibliographies.delete();
           res.status(200).json("bibliographie has been deleted ...");
        }catch(err){
            res.status(500).json(err);
     }
   
  });
  //getbibliographie
  router.get("/:id",async(req,res)=>{
      try{
        const bibliographies = await bibliographie.findById(req.params.id);
        res.status(200).json(bibliographies);
      }catch(err){
          res.status(500).json(err)
      }
  });
  //getAllbibliographie
  router.get("/",async(req,res)=>{
    try{
      const bibliographies = await bibliographie.find();
      res.status(200).json(bibliographies);
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router