const express = require('express');
const mainRouter = require('./routes');

const app = express();

app.use(express.json());

app.use(mainRouter);

module.exports = app;
