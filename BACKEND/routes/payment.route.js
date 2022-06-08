const express = require("express");
const router = express.Router();
const controller = require("../controllers/payment.controller");
  
router.post("/payments", controller.payment);
router.get("/paymentDetails", controller.paymentDetails);

module.exports = router;
