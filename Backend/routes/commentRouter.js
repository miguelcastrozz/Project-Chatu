import express from "express";

const commentRouter = express.Router();

commentRouter.post("/", (req, res) => {
  // CREATE
});

commentRouter.get("/", (req, res) => {
  // READ
});

commentRouter.patch("/", (req, res) => {
  // UPDATE
});

commentRouter.delete("/", (req, res) => {
  // DELETE
});

export default commentRouter;
