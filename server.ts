import { Request, Response } from "express";

const express = require("express");
const app = express();

const PORT:number=4000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({extended:false}));

const models = require("./models")
const {pokemon} = models;

app.get("/api",(req:Request,res:Response)=>{
    res.send(models)
})

app.listen(PORT,()=>{
    console.log(`Now listening at PORT ${PORT}...`)
})