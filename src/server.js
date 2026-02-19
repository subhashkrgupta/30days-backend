import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
dotenv.config();
import userRoute from './routes/user.route.js'


const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(cors())

app.get('/',(req,res)=>{
    res.send("this is home page")
})

app.use('/api/v1',userRoute)

export  {app}