// models/User.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Path to your Sequelize instance

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, // Validates that the email is in a proper format
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Add other fields as needed, e.g., first name, last name, etc.
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt
  tableName: 'users', // Optional: name of the table in the database
});

module.exports = User;
