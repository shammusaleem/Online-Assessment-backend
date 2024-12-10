const Submission = require('../models/Submission');

// Submit Exam
const submitExam = async (req, res) => {
  const { user, exam, answers } = req.body;

  try {
    const newSubmission = new Submission({
      user,
      exam,
      answers,
    });

    await newSubmission.save();
    res.status(201).json(newSubmission);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Submissions by Exam
const getSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find({ exam: req.params.examId }).populate('user');
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { submitExam, getSubmissions };
