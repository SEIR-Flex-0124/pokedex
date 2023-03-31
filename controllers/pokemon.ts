import exp from "constants";
import { Request,Response } from "express";

const express = require("express");
const router = express.Router();
const {pokemon} = require("../models");

pokemon.sort((a:any,b:any)=>{
    if (parseInt(a.id)<parseInt(b.id)) {
        return -1;
    } else if(parseInt(a.id)>parseInt(b.id)){
        return 1;
    } else return 0;
})

router.get("/",(req:Request,res:Response)=>{
    let page;
    if (typeof req.query.page === "undefined"){page = 0}
    else {page = parseInt(req.query.page!.toString())}
    res.render("pokemon/index", {pokemon, page})
})

router.get("/new",(req:Request,res:Response)=>{
    res.render("pokemon/new")
})

router.get("/:id",(req:Request,res:Response)=>{
    res.render("pokemon/show", {mon:pokemon[parseInt(req.params.id)]})
})

module.exports=router;