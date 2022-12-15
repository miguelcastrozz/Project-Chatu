import express from "express";
import { createUser, readUser, updateUser, deleteUser, LoginUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/", (req, res) => {
  createUser(req, res);
}); // CREATE

userRouter.get("/:nombre_usuario", (req, res) => {
  readUser(req, res);
}); // READ

userRouter.get("/", (req, res) => {
  LoginUser(req, res);
}); // LOGIN

userRouter.patch("/:nombre_usuario", (req, res) => {
  updateUser(req, res);
}); // UPDATE

userRouter.delete("/:nombre_usuario", (req, res) => {
  deleteUser(req, res);
}); // DELETE

export default userRouter;
