import mongoose from "mongoose";

const publicModel = mongoose.Schema({
  "titulo": {type: String, required: true},
  "autor": {type: String, required: true},
  "cuerpo": {type: String, required: true},
  "comentarios": []
});

export default mongoose.model("publicaciones", publicModel);
