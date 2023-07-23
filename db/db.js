const express=require('express')
const mongoose=require('mongoose');
const dotenv=require("dotenv");
dotenv.config();
url=process.env.url

const db=()=>{
    mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection

con.on('open',()=>{
    console.log('Connected to database')
})

}

module.exports=db;