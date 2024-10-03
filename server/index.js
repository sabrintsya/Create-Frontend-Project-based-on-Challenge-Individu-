import express from 'express';
import dotenv from 'dotenv'; 
import cookiePaeser  from "cookie-parser";
import cors from 'cors';
import { userRoute } from './routes/userRoute.js';
import { courseRoute } from './routes/courseRoute.js';
dotenv.config()

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json())
app.use(cookiePaeser())
app.use(cors())

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

app.use('/api/user', userRoute)
app.use("/api/course", courseRoute)