'use strict';

// Centralized error handling middleware
module.exports = (err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        success: false,
        message: 'An error occurred! Please try again later.',
    });
};
