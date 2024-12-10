const express = require('express');
const Exam = require('../models/Exam');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Create Exam
router.post('/', authMiddleware, async (req, res) => {
  const { title, description, duration, date, questions } = req.body;

  try {
    const newExam = new Exam({ title, description, duration, date, questions });
    await newExam.save();
    res.status(201).json(newExam);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Exams
router.get('/', async (req, res) => {
  try {
    const exams = await Exam.find();
    res.json(exams);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
