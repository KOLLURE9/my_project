const mongoose = require('mongoose')

const profileSchema  = new mongoose.Schema({   
    type:{
        type: String,
        default: "Dr",
    },     
    firstName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    degree:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    experience:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    languages:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    category:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    speciality:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    phoneNumber:{
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
})

const DoctorProfile = mongoose.model("profile",profileSchema);
module.exports = DoctorProfile;
