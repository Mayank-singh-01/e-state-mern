import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/User.route.js';
import authRouter from './routes/Auth.route.js'

//config ENV 
dotenv.config();
  
//connect to mongodb database
mongoose.connect(process.env.MONGO_DB).then(()=>{
   console.log("connected to the database");
}).catch((error)=>{
   console.log(error);
});

const app = express();

app.use(express.json());

app.listen(process.env.PORT || 3000, ()=>{
   console.log('server is runing at port no 3000');
});

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter)