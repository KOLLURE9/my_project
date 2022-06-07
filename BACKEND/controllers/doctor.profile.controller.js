const Joi = require("joi");
const {profileDoctor,findAllDoctorProfile}  = require("../services/doctor.profile.service");

module.exports = {
      AddDoctorProile: async (req,res) => {
        const schema = Joi.object({ 
            type:Joi.string(),
            firstName : Joi.string().min(5).max(50).required(),
            lastName : Joi.string().min(5).max(50).required(),
            degree:Joi.string().min(5).max(50).required(),
            experience:Joi.string().min(5).max(50).required(),
            languages:Joi.string().min(5).max(50).required(),
            category:Joi.string().min(5).max(50).required(),
            speciality:Joi.string().min(5).max(50).required(),
            phoneNumber : Joi.number().required(), 
            email : Joi.string().email().required(),                                    
        });
        const validation = schema.validate(req.body);
        if (validation.error) {
            res.status(400).send({message: validation.error.message});
            return;
        } 
        const data = validation.value;
        try{
          const result = await profileDoctor(data);          
          res.status(200).send({success:result});
        }catch(error){
          res.status(error.code || 409).send({message: error.message});
        }
    },     
}
