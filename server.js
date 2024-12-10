const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from the .env file
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB without deprecated options
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error: ', err));

const authRoutes = require('./routes/auth');
const examRoutes = require('./routes/exam');
const questionRoutes = require('./routes/question');
const reportRoutes = require('./routes/report');
const userRoutes = require('./routes/user');
const submissionRoutes = require('./routes/submission');

app.use('/api/auth', authRoutes);
app.use('/api/exams', examRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/users', userRoutes);
app.use('/api/submissions', submissionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
