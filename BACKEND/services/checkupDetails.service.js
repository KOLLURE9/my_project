const checkupDetails = require("../models/checkupDetails.model");

module.exports = {    
    checkupDetailsAdd: async (data) => {        
        const cDetails = new checkupDetails(data);
        const isExist = await checkupDetails.findOne({email: data.email});
        if (isExist) {
            throw new Error("Checkup Details is already exist");
        }
        const result = await cDetails.save();
        return result;
    }, 
    
     // Retrieve and return all checkup Details profiles from the database.
     findAllCheckupDetails : async (req, res) => {
        checkupDetails.find()
          .then(cDetails => {
              res.send(cDetails);
          }).catch(err => {
              res.status(500).send({
                  message: err.message || 
                    "Some error occurred while retrieving Checkup Details."
              });
        });
    }, 

    // Find a single checkup Details with a id    
    findOneCheckupDetails : async (req, res) => {
        checkupDetails.findById(req.params.id)
            .then(cDetails => {
                if (!cDetails) {
                    return res.status(404).send({
                        message: "Checkup Details not found with email " + req.params.id
                    });
                }
                res.send(cDetails);
            }).catch(err => {
                if (err) {
                    return res.status(404).send({
                        message: "Checkup Details not found with email " + req.params.id
                    });
                }
                return res.status(500).send({
                    message: "Error retrieving Checkup Details with email " + req.params.id
                });
        });
    },

    // Update a Checkup Details identified by the id in the request
    UpdateOneCheckupDetails : (req, res) => {
        checkupDetails.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then((cDetails) => {
                if (!cDetails) {
                    return res.status(404).send({
                        message: "no Checkup Details found",
                    });
                }
                res.status(200).send(cDetails);
            })
            .catch((err) => {
                return res.status(404).send({
                    message: "error while updating the Checkup Details",
            });
        });
    },

    // Delete a Checkup Details with the specified id in the request
    DeleteOneCheckupDetails : (req, res) => {
        checkupDetails.findByIdAndRemove(req.params.id)
            .then(cDetails => {
                if(!cDetails) {
                return res.status(404).send({
                message: "Checkup Details not found with id " + req.params.id
                });
                }
                res.send({ message: "Checkup Details deleted successfully!" });
            }).catch(err => {
                if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                    return res.status(404).send({ 
                        message: "Checkup Details not found with id " + req.params.id
                    });
                }
                return res.status(500).send({
                    message: "Could not delete Checkup Details with id " + req.params.id
                });
            });
    },


 }
 

