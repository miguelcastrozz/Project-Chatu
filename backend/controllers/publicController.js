import publicModel from "../models/publicModel.js";

export async function createPublic(req, res) {
  const publicacion = req.body.publicacion;
  let documento;
  try {
    documento = await publicModel.create(publicacion);
    res.status(201).json(documento);
  } catch (error) {
    res.status(400);
    res.json(error.message);
  }
}

export async function readPublic(req, res) {
  const id = req.params._id;
  let documento;
  try {
    documento = await publicModel.findOne({id: _id});
    res.status(200).json(documento);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

export async function updatePublic(req, res) {
  const id = req.params._id;
  const docUp = req.body.publicacion;
  let documento = null;
  try {
    documento = await publicModel.updateOne({_id: id}, docUp, {
      runValidators: true,
    });
    res.status(200).json(documento);
  } catch (error) {
    res.status(400);
    res.json(error.message);
  }
}

export async function deletePublic(req, res) {
  const id = req.params._id;
  var pub = null;
  try {
    pub = await publicModel.deleteOne({_id: id});
    res.status(204);
  } catch (error) {
    res.status(400);
    res.json(error.message);
  }
}
