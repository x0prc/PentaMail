const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const config = require('./config/config'); // Configuration settings
const emailRoutes = require('./routes/emailRoutes'); // Email-related routes
const certificateRoutes = require('./routes/certificateRoutes'); // Certificate-related routes

const app = express();

app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON request bodies

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/email', emailRoutes); // Email routes
app.use('/api/certificate', certificateRoutes); // Certificate routes

app.get('/', (req, res) => {
    res.send('Welcome to the PKI Email System!');
});

const PORT = process.env.PORT || 5001;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Optionally: send the error to a monitoring service or log it
});

process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception thrown:', error);
    // Optionally: clean up and exit process
    server.close(() => {
        process.exit(1); // Exit with failure code
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack); // Log the stack trace for debugging
    res.status(err.status || 500).send({
        error: {
            message: err.message || 'Internal Server Error',
        },
    });
});