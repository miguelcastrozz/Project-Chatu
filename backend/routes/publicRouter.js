import express from "express";
import {createPublic, deletePublic, readPublic, updatePublic} from "../controllers/publicController.js";

const publicRouter = express.Router();

publicRouter.post("/", (req, res) => {
  createPublic(req, res);
});

publicRouter.get("/:_id", (req, res) => {
  readPublic(req, res);
});

publicRouter.patch("/:_id", (req, res) => {
  updatePublic(req, res);
});

publicRouter.delete("/:_id", (req, res) => {
  deletePublic(req, res);
});

export default publicRouter;
