const express = require('express');
const router = express.Router();
const controller = require('../controllers/favorite');

router.get('', controller.favoritePage);

module.exports = router;