import { Request, Response } from "express";

const express = require("express");
const app = express();

const PORT:number=4000;

const methodOverride = require("method-override");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({extended:false}));

app.use(methodOverride("_method"));

const models = require("./models");
const {pokemon} = models;

const controllers = require("./controllers");
const pokemonController = controllers.pokemon;

app.get("/api",(req:Request,res:Response)=>{
    res.send(models)
})

app.get("/",(req:Request,res:Response)=>{
    res.redirect("/pokemon")
})

app.use("/pokemon",pokemonController);

app.listen(PORT,()=>{
    console.log(`Now listening at PORT ${PORT}...`)
})