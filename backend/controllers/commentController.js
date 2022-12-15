import commentModel from "../models/commentModel.js";

export async function createComment(req, res) {
  const comentario = req.body.comentario;
  let documento;
  try {
    documento = await commentModel.create(comentario);
    res.status(201).json(documento);
  } catch (error) {
    res.status(400).json(error);
  }
}

export async function readOneComment(req, res) {
  const id = req.params.id;
  let documento;
  try {
    documento = await commentModel.findOne({ _id: id });
  } catch (error) {
    res.status(400).json(error.message);
  }
  res.status(201).json(documento);
}

export async function readComment(req, res) {
  let documento;
  try {
    documento = await commentModel.find();
  } catch (error) {
    res.status(400).json(error.message);
  }
  res.status(201).json(documento);
}

export async function updateComment(req, res) {
  const id = req.params.id;
  const updates = req.body.updates;
  const { field, value } = updates;
  let documento;
  try {
    documento = await commentModel.updateOne({ _id: id }, updates);
    res.status(201).json(documento);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

export async function deleteComment(req, res) {
  const id = req.params.id;
  let documento;
  try {
    documento = await commentModel.deleteOne({ _id: id });
    res.status(201).json(documento);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
