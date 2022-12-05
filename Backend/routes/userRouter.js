import express from "express";

const userRouter = express.Router();

userRouter.post("/", (req, res) => {
  // CREATE
});

userRouter.get("/", (req, res) => {
  // READ
});

userRouter.patch("/", (req, res) => {
  // UPDATE
});

userRouter.delete("/", (req, res) => {
  // DELETE
});

export default userRouter;
