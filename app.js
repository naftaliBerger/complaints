import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connect.js';
import complaintsRouter from './routes/complaints.js';
connectDB();
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/complaints', complaintsRouter);




app.listen(process.env.PORT || 3000, () => {
  console.log(`server is running on port ${process.env.PORT || 3000}`);
});