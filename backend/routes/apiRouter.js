import express from "express";

import commentRouter from "./commentRouter.js";
import publicRouter from "./publicRouter.js";
import userRouter from "./userRouter.js";
import tokenRouter from "./tokenRouter.js";
import loginRouter from "./loginRouter.js";

const apiRouter = express.Router();

apiRouter.use("/comentarios", commentRouter);
apiRouter.use("/login", loginRouter);
apiRouter.use("/publicaciones", publicRouter);
apiRouter.use("/usuarios", userRouter);
apiRouter.use("/token", tokenRouter);

export default apiRouter;
