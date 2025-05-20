const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const reminderRoutes = require('./routes/reminders.js');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/reminders', reminderRoutes);

module.exports = app;
