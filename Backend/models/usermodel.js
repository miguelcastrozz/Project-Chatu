import mongoose from "mongoose";

//modelo de usuario
 const userModel = mongoose.Schema({
      "nombre":{type:String,required:true},
      "contrasenia":{type:String,required:true},
      "correo":{type:String,required:true},
      "anio de nacimiento":{type:Number, required:true},
      "publicaciones":[],
      "comentarios":[]
 });

 //exportar el modelo como un modelo mongoose
 export default mongoose.model("usuarios", userModel);
