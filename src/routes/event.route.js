const express = require('express');
const app = express.Router();
const eventController = require('../controllers/event.controller');

app.post('/', eventController.createEvent);
app.get('/', eventController.getEvents);
app.get('/:id', eventController.getEventById);

module.exports = app;
