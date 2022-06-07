const express = require("express");
const router = express.Router();
const physicalPatientProfileController = require("../controllers/physicalPatient.profile.controller");
const physicalPatientProfileService = require("../services/physicalPatient.profile.service")


//Add Physical patient profile 
//localhost:4000/profile/addPhysicalPatient
router.post('/addPhysical', physicalPatientProfileController.PhysicalPatientProfile);

//Get All Physical Patient profile 
//localhost:4000/profile/displayPhysical
router.get('/displayPhysical', physicalPatientProfileService.findAllPhysicalPatientProfile);

//Get One Physical Patient profile 
//localhost:4000/profile/physicalprofile/:id
router.get('/physicalprofile/:id', physicalPatientProfileService.findOnePhysicalPatientProfile);

//Update one Physical Patient profile 
//localhost:4000/profile/physicalprofile/:id
router.put('/physicalprofile/:id', physicalPatientProfileService.UpdateOnePhysicalPatientProfile);

//Delete one Physical Patient profile 
//localhost:4000/profile/physicalprofile/:id
router.delete('/physicalprofile/:id', physicalPatientProfileService.DeleteOnePhysicalPatientProfile);



module.exports = router;
 