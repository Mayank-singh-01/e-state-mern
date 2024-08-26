import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

//config ENV 
dotenv.config();

//connect to mongodb database
mongoose.connect(process.env.MONGO_DB).then(()=>{
   console.log("connected to the database");
}).catch((error)=>{
   console.log(error);
});

const app = express();

app.listen(3000, ()=>{
   console.log('server is runing at port no 3000');
});