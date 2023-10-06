const db = require("../models");
const Phones = db.phones;
const Op = db.Sequelize.Op; //Op is basically where clause

// Create phone
exports.create = async (req, res) => {
    try {
      const contactId = req.params.contactId;
      const { name, phoneNumber } = req.body;
  
      const createdPhone = await Phones.create({
        name,
        phoneNumber,
        contactId,
      });
  
      console.log('Created phone number:', createdPhone);
  
      res.status(201).json({ phone: createdPhone.toJSON() });
    } catch (err) {
      console.error("Error creating phone number:", err);
      res.status(500).json({ error: err.message || "Some error occurred while creating the phone number." });
    }
  };

// Get all phones
exports.findAll = async (req, res) => {
    try {
      const contactId = req.params.contactId; // Extract contactId from the request params
      const phones = await Phones.findAll({
        where: { contactId }, // Filter the phone numbers by contactId
      });
      res.send(phones);
    } catch (err) {
      console.error("Error while fetching phones:", err);
      res.status(500).json({
        error:
          err.message ||
          "Some error occurred while fetching the phone numbers.",
      });
    }
  };
  

// Get one phone by id
exports.findOne = async (req, res) => {
  
    try{

    } catch(err){
        res.send({message: 'Error while finding the phone by id: ' + err})
        
    }
};

// Update one phone by id
exports.update = async(req, res) => {

    try{

    } catch(err){
        res.send({message: 'Error while updating the phone: ' + err})
        
    }
    
};

// Delete one phone by id
exports.delete = async (req, res) => {
    const id = req.params.phoneId;

    try{
        Phones.destroy({
            where: { id: id }
        })

    } catch(err){
        res.send({message: 'Error while deleting the phone: ' + err})
        
    }
    
};