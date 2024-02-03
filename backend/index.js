import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
//express ko pta hi nhi h post api handle kaise hoti hai ,so for handling post api we needed to body parser


import pdfMiddleware from './utils/pdfMiddleware.js';
import path from 'path'; 

import Connection from "./database/db.js";
import Router from "./routes/routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/uploads', express.static("uploads"));

app.use('/', Router);


const PORT = process.env.PORT || 8000;

Connection();

app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);