const payments = require("../models/payment.model");
//const fs = require("fs");
//const baseUrl = "http://localhost:4000/files/";
const stripe = require("stripe")("sk_test_51KiUUbE07CJhQDYnQwmDGQfETHmwALbLQa24bGqrX6LCD1rV2J73rp6TNoIsiZ0xgEH1HKhLTY0yvpur0L2NnGou00uBtCHSVb"
); 

const uuid = require("uuid/v4");

const paymentDetails=async (req, res) => {
  res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
};

const payment = async (req, res)  => {
  
    console.log("Request:", req.body);
  
    let error;
    let status;
     try { 
      const {token } = req.body;
  
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id,
        name:"User"
      });
  
      const idempotency_key = uuid(); 
      const charge = await stripe.charges.create(
        {
          amount: "5000",
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          //description: `Purchased the`,
         /*  shipping: {
            name: token.card.name,
            address: {
              line1: token.card.address_line1,
              line2: token.card.address_line2,
              city: token.card.address_city,
              country: token.card.address_country,
              postal_code: token.card.address_zip
            }
          } */
        },
        {
          idempotency_key
        }
      );
      console.log("Charge:", { charge });
      status = "success";
    } catch (error) {
      console.error("Error:", error);
      status = "failure";
    } 
  
     res.json({ error, status }); 
 
};


module.exports = {
  payment,
  paymentDetails,
};
