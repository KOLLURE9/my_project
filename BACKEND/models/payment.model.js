const mongoose = require('mongoose')

const paymentSchema  = new mongoose.Schema({   
       
   
    amount: {
        type: Number,
        required:true
    },
    currency: {
        type: String,
        required: true
    },

    customer:{
        type: Number,
        required:true
    },

    receipt_email:{
        type: String,
        required: true
    },
     
})


const paymentDetails=mongoose.model("PaymentDetails",paymentSchema);

module.exports=paymentDetails;