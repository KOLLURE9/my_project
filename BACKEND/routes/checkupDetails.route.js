const express = require("express");
const router = express.Router();
const checkupDetailsController = require("../controllers/checkupDetails.controller");
const checkupDetailsService = require("../services/checkupDetails.service")

//Add checkup Details 
//localhost:4000/profile/addCheckupDetails
router.post('/addcheckupDetails', checkupDetailsController.CheckupDetails);

//Get All Online patient profile 
//localhost:4000/profile/displayOnline
router.get('/displaycheckupDetails', checkupDetailsService.findAllCheckupDetails);

//Get One checkup Details  
//localhost:4000/profile/onlineprofile/:id
router.get('/checkupDetails/:id', checkupDetailsService.findOneCheckupDetails);

//Update one checkup Details 
//localhost:4000/profile/onlineprofile/:id
router.put('/checkupDetails/:id', checkupDetailsService.UpdateOneCheckupDetails);

//Delete one checkup Details 
//localhost:4000/profile/onlineprofile/:id
router.delete('/checkupDetails/:id', checkupDetailsService.DeleteOneCheckupDetails);



module.exports = router;
 