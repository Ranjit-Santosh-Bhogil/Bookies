import express from 'express';

import mongoose from 'mongoose';
const app = express();
const port = 8080;




const start = async()=>{
    const connectDB = await mongoose.connect("mongodb+srv://bhogilranjit_db_user:ranjit07@cluster0.hns9fxo.mongodb.net/?appName=Cluster0");

    app.listen(port,()=>{
        console.log("server is running on port 8080");
    });
}
start();

