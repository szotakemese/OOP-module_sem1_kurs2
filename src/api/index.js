const express = require("express");

const aboutRouter = require("./about");
const taskRouter = require("./task");

const apiRouter = express.Router();
apiRouter.use('/about', aboutRouter);
apiRouter.use('/task', taskRouter);

module.exports = apiRouter;