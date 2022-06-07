const mongoose = require('mongoose')

const patientSchema  = new mongoose.Schema({   
     
    category:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    doctorname: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },

    date:{
        type: Date,
        required:true
    },
    charges:{
        type: Number,
        required:true
    },
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


const physicalPatientProfile=mongoose.model("PhysicalPatient",patientSchema);

module.exports=physicalPatientProfile;