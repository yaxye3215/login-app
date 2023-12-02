import express from 'express';
import { connectDB } from './utils/db.js';
import userRouter from './router/user_router.js';
// doc env
import dotenv from 'dotenv';
dotenv.config();


const app = express();

app.use(express.json());
app.use('/api/user',userRouter );
connectDB()
const port = process.env.PORT ||500;
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});