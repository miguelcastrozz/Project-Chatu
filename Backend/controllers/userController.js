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

export async function readUser(req, res) {
  // Con el nombre de usuario encontrar el usuario
  const nombreDeUsuario = req.params.id;
  const id = req.params.id;
  let documento
  try {
    documento = await userModel.findOne({ "_id": id })
  } catch (error) {
    res.status(400).json(error.message)
    return;
  }
  res.status(200).json(documento)
}
// ERIK'S TASKS
export async function updateUser(req, res) {
  // CODE BLOCK
  const userName = req.params.nombre;
  const changes = req.body.actualizar;

  let documento = null;

  try {
    documento = await userModel.updateOne({"nombre":userName},changes,{runValidators:true});
  } catch (terrible) {
    res.status(400).json(terrible.message);
  }

  res.status(200).json(documento);


}
//ERIK'S TASKS
export async function deleteUser(req, res) {
  // CODE BLOCK
  const userName = req.params.nombre;
  var user = null;
  try{
      user = await userModel.deleteOne({"nombre": userName});
  }catch(terrible){
       res.status(400).json(terrible);
  }
   res.status(204);
}
