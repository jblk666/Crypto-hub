'use strict';

const express = require('express');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();

// Middleware setup
app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded requests

// Database connection setup
const dbURI = 'your_database_connection_string'; // Replace with your actual DB connection string
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log('Database connection error:', err));

// Route initialization
const yourRoutes = require('./routes'); // Make sure to create a routes file
app.use('/api', yourRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
