import exp from "constants";
import { Request,Response } from "express";

const express = require("express");
const router = express.Router();
const {pokemon} = require("../models");

router.get("/",(req:Request,res:Response)=>{
    let page;
    if (typeof req.query.page === "undefined"){page = 0}
    else {page = parseInt(req.query.page!.toString())}
    res.render("pokemon/index", {pokemon, page})
})

module.exports=router;