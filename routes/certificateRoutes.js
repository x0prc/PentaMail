const express = require('express');
const router = express.Router();
const certificateController = require('../controllers/certificateController');

router.post('/request', certificateController.requestCertificate);

module.exports = router;