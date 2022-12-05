import express from "express";

const publicRouter = express.Router();

publicRouter.post("/", (req, res) => {
  // CREATE
});

publicRouter.get("/", (req, res) => {
  // READ
});

publicRouter.patch("/", (req, res) => {
  // UPDATE
});

publicRouter.delete("/", (req, res) => {
  // Delete
});

export default publicRouter;
