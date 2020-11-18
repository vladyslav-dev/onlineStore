const express = require('express');
const router = express.Router();
const controller = require('../controllers/subcategory');

router.get('', controller.subcategoryPage);

module.exports = router;