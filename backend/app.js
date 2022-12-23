import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import apiRouter from "./routes/apiRouter.js";

const app = express();
const port = process.env.port || 8080;

app.listen(port, () => {
  console.log(`Servidor ejecutado exitosamente: ${port}`);
});

mongoose.connect("mongodb+srv://admin:Soyeladmin1@chatucluster.3gjh3iz.mongodb.net/Chatu?retryWrites=true&w=majority", (err) => {
  console.log(err ? `Error de conexión con el cluster: ${err}` : "Base de datos conectada exitosamente");
});

app.use(cors({origin: "http://localhost:3000"}));
app.use(express.json());
app.use("/api", apiRouter);
