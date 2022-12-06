import express from "express";
import { createUser, readUser, updateUser, deleteUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/", (req, res) => {
  createUser(req, res);
}); // CREATE

userRouter.get("/id:", (req, res) => {
  readUser(req, res);
}); // READ

userRouter.patch("/", (req, res) => {
  updateUser(req, res);
}); // UPDATE

userRouter.delete("/", (req, res) => {
  deleteUser(req, res);
}); // DELETE

export default userRouter;
