const generateReport = require('../utils/generateReport');

// Generate Report
const generateExamReport = async (req, res) => {
  try {
    const report = await generateReport(req.params.examId);
    res.json(report);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Reports
const getReports = async (req, res) => {
  try {
    const reports = await Report.find().populate('exam');
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { generateExamReport, getReports };
