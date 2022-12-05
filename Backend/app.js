import express from "express";
import mongoose from "mongoose";
import commentRouter from "./routes/commentRouter.js";
import publicRouter from "./routes/publicRouter.js";
import UserRouter from "./routes/userRouter.js";

const app = express();
const port = process.env.PORT || 8080;

// Listener para iniciar el servidor

app.listen(port, () => {
  console.log(`Servidor ejecutado exitosamente: ${port}`);
});

// Conexión al cluster

mongoose.connect("mongodb+srv://admin:Soyeladmin1@chatucluster.3gjh3iz.mongodb.net/Chatu?retryWrites=true&w=majority", (err) => {
  console.log(err ? `Error de conexión con el cluster: ${err}` : "Base de datos conectada exitosamente");
});

// Middlewares

app.use(express.json());
app.use("/comentarios", commentRouter)
app.use("/publicaciones", publicRouter)
app.use("/usuarios", UserRouter)
