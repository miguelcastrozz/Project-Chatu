import express from "express";
import {createComment, deleteComment, readComment, readOneComment, updateComment} from "../controllers/commentController.js";

const commentRouter = express.Router();

commentRouter.post("/", (req, res) => {
  createComment(req, res);
})

commentRouter.get("/", (req, res) => {
  readComment(req, res);
});

commentRouter.get("/:id", (req, res) => {
  readOneComment(req, res);
});

commentRouter.patch("/:id", (req, res) => {
  updateComment(req, res);
});

commentRouter.delete("/:id", (req, res) => {
  deleteComment(req, res);
});

export default commentRouter;
