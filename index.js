import express from "express";
const app = express();
import {model}from"./model.js";

app.get('/tentang/:bahasa', (req,res)=>{
    const parameter=req.params.bahasa;
    res.send(model(parameter));
})
app.listen(3001,()=>console.log('server hidup'));