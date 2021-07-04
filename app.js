require("dotenv");
const express = require('express');
const fileUpload = require("express-fileupload")
const bodyParser = require('body-parser');
const app = express();

const fileCtrl = require('./apis/fileCtrl');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(fileUpload({ createParentPath: true }));
app.use('/file', fileCtrl);

app.get("/", (req, res) => res.status(200).json({ status: true, result: 'server is running' }));
app.all("*", (req, res) => res.status(404).json({ error: true, message: 'invalid url' }));

module.exports = app;