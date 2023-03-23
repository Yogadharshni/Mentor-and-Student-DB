import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import routerData from './router/msdb.router.js'
// const express = require("express"); // "type": "commonjs"
import express from "express"; // "type": "module"
const app = express();
import { MongoClient } from "mongodb";

const PORT = process.env.PORT;
app.use(express.json())
app.use(routerData)


console.log(process.env.MONGO_URL)
const MONGO_URL = process.env.MONGO_URL;
export const client = new MongoClient(MONGO_URL); // dial
// Top level await
await client.connect(); // call
console.log("Mongo is connected !!!  ");


app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));


