import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export async function createUser(req, res) {
  const usuario = req.body.usuario;
  const { nombre, nombre_usuario, contrasenia, correo, anio_nacimiento} = req.body.usuario
  const salt = await bcrypt.genSalt(10);
  usuario.contrasenia = await bcrypt.hash(contrasenia, salt)

  let documento;
  try {

    documento = await userModel.create(usuario);

    res.status(201).json(documento);
  } catch (terrible) {
    res.status(400).json(terrible.message);
  }
}

export async function readUser(req, res) {
  const nombreDeUsuario = req.params.id;
  const id = req.params.id;
  let documento;
  try {
    documento = await userModel.findOne({ _id: id });
  } catch (error) {
    res.status(400).json(error.message);
    return;
  }
  res.status(200).json(documento);
}

export async function LoginUser(req, res) {
  const usuario = req.body.login;
  const ACCESS_TOKEN = "2f9359f60fa849011aaf711a4332e84a13283b568230317fee84ad9cd1dc71b887c1fcaf10a4704697e26e26f697fa27b57b21e1f3669c89c930f8e65adda1a1"
  let documento;

  documento = await userModel.findOne({ "nombre_usuario": usuario.nombre_usuario });
  const acceso = await bcrypt.compare(usuario.contrasenia, documento.contrasenia)

  console.log(acceso)

  if(acceso) {
    const token = jwt.sign(usuario, ACCESS_TOKEN)
    res.status(200).json(token)
  }
  else
  {
    res.sendStatus(401)
  }
}

export async function verifyUser(req, res) {
  const { token } = req.headers
  const ACCESS_TOKEN = "2f9359f60fa849011aaf711a4332e84a13283b568230317fee84ad9cd1dc71b887c1fcaf10a4704697e26e26f697fa27b57b21e1f3669c89c930f8e65adda1a1"

  const usuario = jwt.verify(token, ACCESS_TOKEN)

  res.json(usuario)

}

export async function updateUser(req, res) {
  const userName = req.params.nombre;
  const changes = req.body.actualizar;
  let documento = null;
  try {
    documento = await userModel.updateOne({ nombre: userName }, changes, {
      runValidators: true,
    });
  } catch (terrible) {
    res.status(400).json(terrible.message);
  }
  res.status(200).json(documento);
}

export async function deleteUser(req, res) {
  const userName = req.params.nombre;
  var user = null;
  try {
    user = await userModel.deleteOne({ nombre: userName });
  } catch (terrible) {
    res.status(400).json(terrible);
  }
  res.status(204);
}
