const mongoose = require('mongoose')

const checkupDetailsSchema  = new mongoose.Schema({   
       
   
    firstname: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    lastname: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },

    dob:{
        type: Date,
        required:true
    },

    age:{
        type: Number,
        required:true
    },
    
    mobileno:{
        type: Number,
        required:true
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },   
    
     address:{
        type: String,
        required:true
    },       
})


const checkupDetails=mongoose.model("CheckupDetails",checkupDetailsSchema);

module.exports=checkupDetails;