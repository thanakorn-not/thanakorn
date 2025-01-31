const express = require('express');
const app = express.Router();
const cameraController = require('../controllers/camera.controller');

app.post('/', cameraController.createCamera);
app.get('/', cameraController.getCameras);
app.get('/:id', cameraController.getCameraById);

module.exports = app;
