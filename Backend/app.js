import express from "express";
import mongoose from "mongoose";

const app = express();
const puerto = process.env.PORT || 8080;

// Listener para iniciar el servidor

app.listen(puerto, () => {
  console.log(`Servidor ejecutado correctamente: ${puerto}`);
});

// Conexión al cluster

mongoose.connect("mongodb+srv://admin:Soyeladmin1@chatucluster.3gjh3iz.mongodb.net/Chatu?retryWrites=true&w=majority", (err) => {
  console.log(err ? `❌ ERROR DE CONEXIÓN CON EL CLUSTER: ${err}` : "✅ La base de datos esta conectada");
});

// Middlewares

app.use(express.json());
