const express = require('express');
const { update } = require('./kitten');
const router = express.Router();
require('./db');
const Kitten = require('./kitten');

router.get('/',(req,res)=>{
    res.status(200).json({status:"ok",message:"API-KUCING-v1",error:null});
});

router.get('/kittens',async (req,res)=>{
    try{
        const result = await Kitten.find();
        res.status(200).json({status:"ok",data:result,message:null});
    }catch(err){
        res.status(400).json({status:"error",data:null,message:err})
    }
});

router.post('/kittens',async (req,res)=>{
    try{
        const {nama,tipe} = req.body;
        const insertKitten = new Kitten({nama,tipe});
        await insertKitten.save();
        res.status(200).json({status:"ok",data:{nama,tipe},message:null});
    }catch(err){
        res.status(400).json({status:"error",data:null,message:err})
    }
});

router.put('/kittens/:id',async (req,res)=>{
    try{
        const {id} = req.params;
        const {nama,tipe} = req.body;

        const updateKitten = await Kitten.findById(id);
        updateKitten.nama = nama;
        updateKitten.tipe = tipe;
        await updateKitten.save();


        res.status(200).json({status:"ok",data:{id,nama,tipe},message:null});
    }catch(err){
        res.status(400).json({status:"error",data:null,message:err})
    }
});

router.delete('/kittens/:id',async (req,res)=>{
    try{
        const {id} = req.params;
        await Kitten.deleteOne({_id:id});
        res.status(200).json({status:"ok",data:{message:`id : ${id} deleted`},message:null});
    }catch(err){
        res.status(400).json({status:"error",data:null,message:err})
    }
});

module.exports = router