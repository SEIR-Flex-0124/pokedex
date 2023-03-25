import { Request, Response } from "express";

const express = require("express");
const app = express();

const PORT:number=4000;

const models = require("./models")
const {pokemon} = models;

app.get("/",(req:Request,res:Response)=>{
    res.send(pokemon)
})

app.listen(PORT,()=>{
    console.log(`Now listening at PORT ${PORT}...`)
})