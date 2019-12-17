const express = require('express');
const task = require('./task.js');

const taskRouter = express.Router();

taskRouter.get('/', task.seventhOfTask);

module.exports = taskRouter;