import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRoute from './routes/user.route.js'
import blogRoute from './routes/blog.route.js'
import aichatRoute from './routes/aichatRoute.js'

dotenv.config();

const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: ["http://localhost:5173", process.env.FRONTEND_URL],
  credentials: true
}));

app.get('/',(req,res)=>{
    res.send("this is home page")
})

app.use('/api/v1',userRoute);
app.use('/api/v1/blogs',blogRoute)
app.use('/api/v1',aichatRoute)

app.get('/health', (req, res) => {
  res.status(200).send('Server is healthy');
});

export  {app}