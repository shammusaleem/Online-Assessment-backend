const Exam = require('../models/Exam');

// Create Exam
const createExam = async (req, res) => {
  const { name, description, date, timeLimit } = req.body;

  try {
    const newExam = new Exam({
      name,
      description,
      date,
      timeLimit,
    });

    await newExam.save();
    res.status(201).json(newExam);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all Exams
const getExams = async (req, res) => {
  try {
    const exams = await Exam.find();
    res.json(exams);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Exam
const updateExam = async (req, res) => {
  const { name, description, date, timeLimit } = req.body;

  try {
    const updatedExam = await Exam.findByIdAndUpdate(
      req.params.id,
      { name, description, date, timeLimit },
      { new: true }
    );
    res.json(updatedExam);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Exam
const deleteExam = async (req, res) => {
  try {
    await Exam.findByIdAndDelete(req.params.id);
    res.json({ message: 'Exam deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createExam, getExams, updateExam, deleteExam };
