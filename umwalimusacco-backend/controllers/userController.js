const db = require('../config/db');

exports.getUserDetails = (req, res) => {
    db.query('SELECT id, name, email, role FROM users WHERE id = ?', [req.user.userId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results[0]);
    });
};

  
