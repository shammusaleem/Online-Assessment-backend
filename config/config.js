module.exports = {
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/online-assessment-platform',  // MongoDB URI
    jwtSecret: process.env.JWT_SECRET || 'your-secret-key',  // JWT Secret for encoding/decoding tokens
    port: process.env.PORT || 5000,  // Port the backend server will run on
    // Any other configurations (API keys, third-party service configurations, etc.)
  };
  