const express = require('express');
const Report = require('../models/Report');
const generateReport = require('../utils/generateReport');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Generate Report for an Exam
router.post('/:examId', authMiddleware, async (req, res) => {
  try {
    const report = await generateReport(req.params.examId);
    res.json(report);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Reports
router.get('/', authMiddleware, async (req, res) => {
  try {
    const reports = await Report.find().populate('exam');
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
