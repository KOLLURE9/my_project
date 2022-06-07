const Joi = require("joi");
const {physicalPatientAdd,findAllPhysicalPatientProfile}  = require("../services/physicalPatient.profile.service");

module.exports = {
  PhysicalPatientProfile : async (req,res) => {
        const schema = Joi.object({ 
          category:Joi.string().min(5).max(50).required(),
          doctorname : Joi.string().min(5).max(50).required(),
          date : Joi.date().required(),
          charges:Joi.number().required(),
          firstname:Joi.string().min(5).max(50).required(),
          lastname:Joi.string().min(5).max(50).required(),
          dob:Joi.date().required(),
          mobileno:Joi.number().required(), 
          email : Joi.string().email().required(), 
          address : Joi.string().required(), 
                                               
        });
        const validation = schema.validate(req.body);
        if (validation.error) {
            res.status(400).send({message: validation.error.message});
            return;
        } 
        const data = validation.value;
        try{
          const result = await physicalPatientAdd(data);          
          res.status(200).send({success:result});
        }catch(error){
          res.status(error.code || 409).send({message: error.message});
        }
    }
}
  