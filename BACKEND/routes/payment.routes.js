const express = require("express");
const router = express.Router();
//const paymentController = require("../controllers/paymentDetails.controller");
//const paymentService = require("../services/paymentDetails.service")

router.get("/", (req, res) => {
    res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
  });

  router.post("/checkouts", async (req, res) => {
    console.log("test");
  })

module.exports = router;