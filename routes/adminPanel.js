const express = require('express');
const router = express.Router();
const controller = require('../controllers/adminPanel');

router.get('/login', controller.adminPage);
router.post('/login', controller.login);
router.get('/dashboard', controller.dashboard);
router.get('/changer', controller.getChangeGood);
router.post('/changer', controller.changeProduct);
router.get('/orders', controller.sendOrders);
router.post('/orders', controller.sendPost);
router.post('/update-status', controller.changeStatus);
router.post('/finish-status', controller.changeFinishStatus);

router.get('/logout', controller.exit);
router.get('/fail', controller.fail);

module.exports = router;