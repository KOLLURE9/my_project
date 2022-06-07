const physicalPatientProfile = require("../models/physicalPatient.profile.model");

module.exports = {    
    physicalPatientAdd: async (data) => {        
        const pPatient = new physicalPatientProfile(data);
        const isExist = await physicalPatientProfile.findOne({email: data.email});
        if (isExist) {
            throw new Error("physical profile is already exist");
        }
        const result = await pPatient.save();
        return result;
    },    
   
    // Retrieve and return all Physical Patient' profiles from the database.
    findAllPhysicalPatientProfile : async (req, res) => {
        physicalPatientProfile.find()
          .then(pPatient => {
              res.send(pPatient);
          }).catch(err => {
              res.status(500).send({
                  message: err.message || 
                    "Some error occurred while retrieving Physical Patient' profiles."
              });
        });
    }, 

    // Find a single Physical Patient with a id    
    findOnePhysicalPatientProfile : async (req, res) => {
        physicalPatientProfile.findById(req.params.id)
            .then(pPatient => {
                if (!pPatient) {
                    return res.status(404).send({
                        message: "Physical Patient's profile not found with email " + req.params.id
                    });
                }
                res.send(pPatient);
            }).catch(err => {
                if (err) {
                    return res.status(404).send({
                        message: "Physical Patient's profile not found with email " + req.params.id
                    });
                }
                return res.status(500).send({
                    message: "Error retrieving Physical Patient's profile with email " + req.params.id
                });
        });
    },

    // Update a Physical Patient identified by the id in the request
    UpdateOnePhysicalPatientProfile : (req, res) => {
        physicalPatientProfile.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then((pPatient) => {
                if (!pPatient) {
                    return res.status(404).send({
                        message: "no Physical Patient found",
                    });
                }
                res.status(200).send(pPatient);
            })
            .catch((err) => {
                return res.status(404).send({
                    message: "error while updating the profile",
            });
        });
    },

    // Delete a Physical Patient with the specified id in the request
    DeleteOnePhysicalPatientProfile : (req, res) => {
        physicalPatientProfile.findByIdAndRemove(req.params.id)
            .then(pPatient => {
                if(!pPatient) {
                return res.status(404).send({
                message: "Physical Patient profile not found with id " + req.params.id
                });
                }
                res.send({ message: "Physical Patient profile deleted successfully!" });
            }).catch(err => {
                if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                    return res.status(404).send({ 
                        message: "Physical Patient profile not found with id " + req.params.id
                    });
                }
                return res.status(500).send({
                    message: "Could not delete Physical Patient with id " + req.params.id
                });
            });
    },


 }
  

