const db = require("../models");
const Contacts = db.contacts;
const Phones = db.phones;
const Op = db.Sequelize.Op; //Op is basically where clause

// Create contact
exports.create = async (req, res) => {

    try{
        const newContact = await Contacts.create(req.body);
        res.json(newContact)
    }
    catch(err){
        res.json({message: 'Error while creating contact: ' + err})
    }
    
    
};

// Get all contacts
exports.findAll = async (req, res) => {

    try{
        const contactList = await Contacts.findAll();
        res.json(contactList)

    } catch(err){
        res.json({message: 'Error getting contacts: ' + err})


    }
    
};

// Get one contact by id
exports.findOne = async (req, res) => {

    try{

    } catch(err){
        
    }
  
};

// Update one contact by id
exports.update = async (req, res) => {

    try{

    } catch(err){
        
    }
    
};

// Delete one contact by id
exports.delete = async (req, res) => {

    try{

    } catch(err){
        
    }
    
};