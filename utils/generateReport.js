const Submission = require('../models/Submission');
const Exam = require('../models/Exam');
const Report = require('../models/Report');

const generateReport = async (examId) => {
  const submissions = await Submission.find({ exam: examId }).populate('user');
  const exam = await Exam.findById(examId);

  let totalScore = 0;
  const scores = submissions.map(sub => {
    const score = sub.answers.filter((answer, index) => answer === exam.questions[index].correctOption).length;
    totalScore += score;
    return { student: sub.user, score };
  });

  const averageScore = totalScore / submissions.length;

  const report = new Report({
    exam: examId,
    averageScore,
    totalParticipants: submissions.length,
    scores,
  });

  await report.save();
  return report;
};

module.exports = generateReport;
