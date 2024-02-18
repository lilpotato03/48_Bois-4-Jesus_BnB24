import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'

const app=express()

app.listen(process.env.PORT,()=>{
    console.log(`server started on ${process.env.PORT}`)
})

