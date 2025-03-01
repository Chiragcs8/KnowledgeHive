const express = require('express');
const {createOrder, capturePaymentAndFinalizeOrder } = require('../../controllers/student-controller/order-controller.js')

const router = express.Router();

router.post('/create', createOrder);

router.post('/capture', capturePaymentAndFinalizeOrder);

module.exports = router;