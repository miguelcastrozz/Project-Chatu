import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import commentRouter from "./routes/commentRouter.js";
import publicRouter from "./routes/publicRouter.js";
import userRouter from "./routes/userRouter.js";

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
app.use("/comentarios", commentRouter);
app.use("/publicaciones", publicRouter);
app.use("/usuarios", userRouter);
