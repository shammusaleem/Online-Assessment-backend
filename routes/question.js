const express = require('express');
const Question = require('../models/Question');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Create Question
router.post('/', authMiddleware, async (req, res) => {
  const { questionText, options, correctOption, exam } = req.body;

  try {
    const newQuestion = new Question({ questionText, options, correctOption, exam });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Questions by Exam ID
router.get('/:examId', async (req, res) => {
  try {
    const questions = await Question.find({ exam: req.params.examId });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update Question
router.put('/:id', authMiddleware, async (req, res) => {
  const { questionText, options, correctOption } = req.body;

  try {
    const updatedQuestion = await Question.findByIdAndUpdate(
      req.params.id,
      { questionText, options, correctOption },
      { new: true }
    );
    res.json(updatedQuestion);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete Question
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    await Question.findByIdAndDelete(req.params.id);
    res.json({ message: 'Question deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
