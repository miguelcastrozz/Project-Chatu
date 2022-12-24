import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function createUser(req, res) {
  // Para llegar a esta ruta uzamos el método POST
  // http://localhost:8080/api/usuarios

  const usuario = req.body.usuario;
  console.log(usuario);
  const { nombre, nombre_usuario, contrasenia, correo, anio_nacimiento } = req.body.usuario;
  const salt = await bcrypt.genSalt(10);
  usuario.contrasenia = await bcrypt.hash(contrasenia, salt);
  let documento;
  try {
    documento = await userModel.create(usuario);
    res.status(201).json({respuesta:"OK", data:documento});
  } catch (terrible) {
    res.status(400).json({respuesta:"ERROR", data:terrible.message});
  }
}

export async function readUser(req, res) {
  const nombreDeUsuario = req.params.nombre_usuario;
  const usuario = req.params.nombre_usuario;
  let documento;
  try {
    documento = await userModel.findOne({ nombre_usuario: usuario });
  } catch (error) {
    res.status(400).json(error.message);
    return;
  }
  res.status(200).json(documento);
}

export async function LoginUser(req, res) {
  const usuario = req.body.login;
  const ACCESS_TOKEN = "2f9359f60fa849011aaf711a4332e84a13283b568230317fee84ad9cd1dc71b887c1fcaf10a4704697e26e26f697fa27b57b21e1f3669c89c930f8e65adda1a1";
  let documento = await userModel.findOne({correo: usuario.correo });
  if(!documento) {
    res.status(404).json({respuesta:"ERROR", data:"User not found"});
  } else {
    const acceso = await bcrypt.compare(usuario.contrasenia, documento.contrasenia);
    if (acceso) {
      const vlrtoken = jwt.sign(documento.nombre_usuario, ACCESS_TOKEN);
      res.status(200).json({respuesta:"OK", token:vlrtoken, user:documento.nombre_usuario});
    } else {
      res.status(401).json({respuesta:"ERROR", data:"Unauthorized"});
    }
  }
}

export async function verifyToken(req, res) {
  const { token } = req.headers;
  const ACCESS_TOKEN = "2f9359f60fa849011aaf711a4332e84a13283b568230317fee84ad9cd1dc71b887c1fcaf10a4704697e26e26f697fa27b57b21e1f3669c89c930f8e65adda1a1";
  try {
    const usuario = jwt.verify(token, ACCESS_TOKEN);
    res.json(usuario);
  } catch (terrible) {
    res.status(400).json(terrible.message);
  }
}

export async function updateUser(req, res) {
  const userName = req.params.nombre_usuario;
  const changes = req.body.actualizar;
  const { nombre, nombre_usuario, contrasenia, correo, anio_nacimiento } = req.body.actualizar;
  const salt = await bcrypt.genSalt(10);
  changes.contrasenia = await bcrypt.hash(contrasenia, salt);
  let documento = null;
  try {
    documento = await userModel.updateOne(
      { nombre_usuario: userName },
      changes,
      {
        runValidators: true,
      }
    );
    res.status(200).json(documento);
  } catch (terrible) {
    res.status(400).json(terrible.message);
  }
}

export async function deleteUser(req, res) {
  const userName = req.params.nombre_usuario;
  var user = null;
  try {
    user = await userModel.deleteOne({ nombre_usuario: userName });
    res.status(200).json(user);
  } catch (terrible) {
    res.status(400).json(terrible);
  }
}
