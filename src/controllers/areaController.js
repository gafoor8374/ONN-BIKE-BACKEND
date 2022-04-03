const express = require('express');

const Area = require("../model/AreaModel")

const router=express.Router()

router.post("",async(req,res)=>{

    try{
     const area = await Area.create(req.body)

     return res.status(201).send(area);
    }catch(err){
        return res.status(400).send({message:err.message})
    }
})


module.exports =router;