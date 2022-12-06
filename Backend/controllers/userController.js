import userModel from "../models/userModel.js";

export async function createUser(req, res) {
  const usuario = req.body.usuario;
  let documento;
  try {
    documento = await userModel.create(usuario);
  } catch (terrible) {
    res.status(400).json(terrible.message);
  }
  res.status(201);
}

export function readUser(req,res) {
  const id = req.params.id;

}

export function updateUser(req, res) {
  // CODE BLOCK
}

export function deleteUser(req, user) {
  // CODE BLOCK
}
