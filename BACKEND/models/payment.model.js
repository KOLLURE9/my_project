const mongoose = require('mongoose')

const paymentSchema  = new mongoose.Schema({   
       
    name: {
        type: String,
        required: true,
    
    },
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

    receiptEmail:{
        type: String,
        required: true
    }       
})

const PaymentMethod = mongoose.model("payment",paymentSchema);
module.exports = PaymentMethod ;
