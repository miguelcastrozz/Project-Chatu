import mongoose from "mongoose";

// Modelo de usuario

function validarCorreo(correo) {
  let expressionRegular = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  return expressionRegular.test(correo);
}

const userModel = mongoose.Schema ({
  "nombre": { type: String, required: true },
  "nombre de usuario": { type: String, required: true, minLength: 5, maxLength: 12, unique:true },
  "contrasenia": { type: String, required: true },
  "correo": { type: String, required: true, validate: { validator: validarCorreo, message: "Volud@, me podes hacer el favor de ingresar un correo correcto" } },
  "anio de nacimiento": { type: Number, required: true, min: 1940, max: 2022 },
  "publicaciones": Array,
  "comentarios": Array
});

// Exportar el modelo como un modelo mongoose
export default mongoose.model("usuarios", userModel);
