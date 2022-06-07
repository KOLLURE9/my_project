const express = require("express");
const router = express.Router();
const doctorProfileController = require("../controllers/doctor.profile.controller");
const doctorProfileService = require("../services/doctor.profile.service")

//Add Doctor profile 
//localhost:4000/profile/addProfile
router.post('/addProfile', doctorProfileController.AddDoctorProile);

//Get All Doctor profile 
//localhost:4000/profile/displaydoctors
router.get('/displaydoctors', doctorProfileService.findAllDoctorProfile);

//Get One Doctor profile 
//localhost:4000/profile/doctorprofile/:id
router.get('/doctorprofile/:id', doctorProfileService.findOneDoctorProfile);

//Update one Doctor profile 
//localhost:4000/profile/doctorprofile/:id
router.put('/doctorprofile/:id', doctorProfileService.UpdateOneDoctorProfile);

//Delete one Doctor profile 
//localhost:4000/profile/doctorprofile/:id
router.delete('/doctorprofile/:id', doctorProfileService.DeleteOneDoctorProfile);

module.exports = router;
