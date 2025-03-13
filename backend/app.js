import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import apiRouter from "./routes/apiRouter.js";

import { config } from "dotenv";

const app = express();
const port = process.env.port || 8080;

config();

app.listen(port, () => {
  console.log(`Servidor ejecutado exitosamente: ${port}`);
});

mongoose.connect(process.env.DB_URI, (err) => {
  console.log(err ? `Error de conexión con el cluster: ${err}` : "Base de datos conectada exitosamente");
});

app.use(cors({origin: "http://localhost:5173"}));
app.use(express.json());
app.use("/api", apiRouter);
