import exp from "constants";
import { Request,Response } from "express";

const express = require("express");
const router = express.Router();
const {pokemon} = require("../models");

router.get("/",(req:Request,res:Response)=>{
    res.render("pokemon/index")
})

module.exports=router;