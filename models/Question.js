const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctOption: { type: Number, required: true },
  exam: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam', required: true },
});

module.exports = mongoose.model('Question', questionSchema);
