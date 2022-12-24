import mongoose from "mongoose";

const commentModel = mongoose.Schema ({
  "autor": {type: String, required: true},
  "cuerpo": {type: String, required: true}
});

export default mongoose.model("comentarios", commentModel);
