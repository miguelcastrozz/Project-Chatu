import express from "express";
import { createUser, readUser, updateUser, deleteUser, LoginUser, verifyUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/", (req, res) => {
  createUser(req, res);
}); // CREATE

userRouter.get("/:id", (req, res) => {
  readUser(req, res);
}); // READ

userRouter.get("/", (req, res) => {
  LoginUser(req, res);
}); // LOGIN

userRouter.get("/verify", (req, res) => {
  verifyUser(req, res);
}); // VERIFY TOKEN

userRouter.patch("/:nombre", (req, res) => {
  updateUser(req, res);
}); // UPDATE

userRouter.delete("/:nombre", (req, res) => {
  deleteUser(req, res);
}); // DELETE

export default userRouter;
