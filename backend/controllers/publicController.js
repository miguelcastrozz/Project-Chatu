import publicModel from "../models/publicModel.js";

export async function createPublic(req, res) {
  const publicacion = req.body.publicacion;
  let documento;
  try {
    documento = await publicModel.create(publicacion);
  } catch (error) {
    res.status(400);
    res.json(error.message);
  }
  res.status(201);
}

export async function readPublic(req, res) {
  const id = req.params._id;
  let documento;
  try {
    documento = await publicModel.findOne({ "id": _id });
  } catch (error) {
    res.status(400);
    res.json(error.message);
  }
  res.status(200);
  res.json(documento);
}

export async function updatePublic(req, res) {
  const id = req.params._id;
  const docUp = req.body.publicacion;
  let documento = null;
  try {
    documento = await publicModel.updateOne({ "_id": id }, docUp, {
      runValidators: true,
    });
  } catch (error) {
    res.status(400);
    res.json(error.message);
  }
  res.status(200);
  res.json(documento);
}

export async function deletePublic(req, res) {
  const id = req.params._id;
  var pub = null;
  try {
    pub = await publicModel.deleteOne({ "_id": id });
  } catch (error) {
    res.status(400);
    res.json(error.message);
  }
  res.status(204);
}
