const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  exam: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam', required: true },
  averageScore: { type: Number },
  totalParticipants: { type: Number },
  scores: [{
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    score: { type: Number },
  }],
});

module.exports = mongoose.model('Report', reportSchema);
