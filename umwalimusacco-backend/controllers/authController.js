const bcrypt = require("bcrypt");
const db = require('../config/db');

exports.registerUser = (req, res) => {
  const { name, email, password } = req.body;
 
  console.log(password)

  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Check if email already exists
  coon.query("SELECT id FROM users WHERE email = ?", [email], async (err, results) => {
    if (err) return res.status(500).json({ error: "Database error." });
    if (results.length > 0) {
      return res.status(400).json({ error: "Email already registered." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword)

    // Insert the new user
    coon.query(
      "INSERT INTO `users` ( `name`, `email`, `password`, `role`, `created_at`) VALUES ( 'ad', 'hhh', 'v', 'customer')",
      (err) => {
        if (err) return res.status(500).json({ error: "Failed to register user." });
        res.status(201).json({ message: "User registered successfully." });
      }
    );
  });
};
