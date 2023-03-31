import exp from "constants";
import { Request,Response } from "express";
import { stat } from "fs";

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
    const id:string = req.params.id;
    let mon:any;
    for (let i = 0; i < pokemon.length; i++) {
        const element = pokemon[i];
        if(element.id===id){
            mon=element;
            i=pokemon.length;
        }
    }
    res.render("pokemon/show", {mon})
})

router.post("",(req:Request,res:Response)=>{
    const newMon = req.body;
    newMon.type = [newMon.type1];
    if(typeof newMon.type2 !== "undefined"){newMon.type.push(newMon.type2)}
    // const testarr:Array<any> = [];
    // testarr.push
    const stats: Object = {
        hp: newMon.hp,
        attack:newMon.attack,
        defense:newMon.defense,
        spattack:newMon.spattack,
        spdefense:newMon.spdefense,
        speed:newMon.speed,
    };
    newMon.stats=stats;
    console.log(newMon);
    pokemon.push(newMon);
    res.redirect(`/pokemon/${newMon.id}`);
})

module.exports=router;