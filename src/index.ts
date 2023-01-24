import dotenv from 'dotenv';
dotenv.config();


import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { callAPI } from './OpenAI';

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


//server test api
// app.use('/',(req,res)=>{
//   res.json("this is Anuj Shaan Server")
// })


//call Open Api
app.post('/',callAPI)


const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
  console.log("server is up and running at port",PORT)
})