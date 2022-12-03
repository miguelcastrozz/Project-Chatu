import express from "express";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 8080;
//middleware
app.use(express.json());
//listener para inicar el server
app.listen(port,()=>{
    console.log("conexion started at:"+ port);
});
