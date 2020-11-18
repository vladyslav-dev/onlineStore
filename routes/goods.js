const express = require('express');
const router = express.Router();
const controller = require('../controllers/goods');

router.get('', controller.goodsPage);

module.exports = router;