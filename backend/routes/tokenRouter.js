import express from "express";
import {verifyToken} from "../controllers/userController.js";

const tokenRouter = express.Router();

tokenRouter.get("/", (req, res) => {
  verifyToken(req, res);
}); // VERIFY TOKEN

export default tokenRouter;
