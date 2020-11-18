const express = require('express');
const router = express.Router();
const controller = require('../controllers/order');

router.get('', controller.orderPage);

module.exports = router;