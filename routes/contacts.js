const express = require('express');
const router = express.Router();
const controller = require('../controllers/contacts');

router.get('', controller.cont);

module.exports = router;