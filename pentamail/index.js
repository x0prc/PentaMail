const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const config = require('./config/config'); 
const emailRoutes = require('./routes/emailRoutes'); 
const certificateRoutes = require('./routes/certificateRoutes');

const app = express();


app.use(cors()); 
app.use(bodyParser.json()); 

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/email', emailRoutes); 
app.use('/api/certificate', certificateRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});