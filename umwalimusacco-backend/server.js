const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require("./routes/authRoutes");
dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
// Middleware to parse JSON
app.use(express.json());
//app.use('/auth', authRoutes);
app.use('/user', userRoutes);

// Base API route
app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 5000;
app.post('/auth/forgot-password', async (req, res) => {
    const { email } = req.body;
    try {
      

      // Logic to send reset email
      await sendPasswordResetEmail(email); // Function to send email
      res.status(200).json({ message: "Password reset link sent to your email." });
    } catch (error) {
      res.status(500).json({ error: "Failed to send reset email." });
    }
  });
  
  
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
