import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/User.route.js';
import authRouter from './routes/Auth.route.js';
import listingRouter from './routes/listing.route.js'
import cookieParser from "cookie-parser";
import path from 'path';

//config env 
dotenv.config();
  
//connect to mongodb database
mongoose.connect(process.env.MONGO_DB).then(()=>{
   console.log("connected to the database");
}).catch((error)=>{
   console.log(error);
});

const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(cookieParser());

//routers
app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use('/api/listing',listingRouter)

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

//middleware 
app.use((err,req,res,next) => {
   const statusCode = err.statusCode || 500;
   const message = err.message || 'Internal Server Error';
   return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
   })
})


app.listen(process.env.PORT || 3000, ()=>{
   console.log('server is runing at port no 3000');
});
