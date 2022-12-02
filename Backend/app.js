import express from "express";

const app = express();
const port = 8080;
//middleware
app.use(express.json());
//listener para inicar el server
app.listen(port,()=>{
    console.log("conexion started at:"+ port);
});
