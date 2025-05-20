const express = require('express');
const router = express.Router();
const Reminder = require('../models/ReminderModel');

// POST /api/reminder
router.post('/', async (req, res) => {
  const { date, time, message } = req.body;

  if (!date || !time || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const reminder = new Reminder({ date, time, message });
    await reminder.save();
    res.status(201).json({ success: true, data: reminder });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save reminder' });
  }
});

module.exports = router;
