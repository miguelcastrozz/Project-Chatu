import express from "express";
import {LoginUser} from "../controllers/userController.js";

const loginRouter = express.Router();

loginRouter.post("/", (req, res) => {
    LoginUser(req, res);
  }); // LOGIN

  export default loginRouter;
