import mongoose from "mongoose";

function validarCorreo(correo) {
  let expressionRegular = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  return expressionRegular.test(correo);
}

const userModel = mongoose.Schema({
  nombre: { type: String, required: true },
  nombre_usuario: { type: String, required: true, minLength: 5, maxLength: 12, unique: true, },
  contrasenia: { type: String, required: true },
  correo: { type: String, required: true, validate: { validator: validarCorreo, message: "Ingrese un correo correcto", }, },
  anio_nacimiento: { type: Number, required: true, min: 1940, max: 2022 },
  publicaciones: Array,
  comentarios: Array,
});

export default mongoose.model("usuarios", userModel);
