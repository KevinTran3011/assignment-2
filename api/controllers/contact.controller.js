const db = require("../models");
const Contacts = db.contacts;
const Phones = db.phones;
const Op = db.Sequelize.Op; //Op is basically where clause

// Create contact
exports.create = (req, res) => {

    try{
        const newContact =  Contacts.create(req.body);
        res.json(newContact);
    }
    catch(err){
        res.json({message: 'Error while creating contact: ' + err})
    }
    
    
};

// Get all contacts
exports.findAll = async (req, res) => {

    try{
        const contactList = await Contacts.findAll();
        res.json(contactList);

    } catch(err){
        res.json({message: 'Error getting contacts: ' + err})


    }
    
};

// Get one contact by id
exports.findOne = async (req, res) => {
    
    const contact_Id = req.params.contactId;

    try{
        const required_Contact = await Contacts.findByPk(contact_Id)
        if( !required_Contact){
            res.json({message: 'Contact not found'})
        }
        else{
            res.json(required_Contact)
        }

    } catch(err){
        res.json({message: 'Error while finding the contact by id: ' + err})
        
    }
  
};

// Update one contact by id
exports.update = async (req, res) => {

    const contact_id = req.params.contactId;

    try{

        const required_Contact = await Contact.findByPk(contact_id)
        if(!required_Contact){
            res.json({message: 'The contact in search is not on the list'})
        }
        else{
        
        }

    } catch(err){
        
    }
    
};

// Delete one contact by id
exports.delete = async (req, res) => {

    const contact_id = req.params.contactId;

    try{
        const contact_delete = await Contacts.destroy({
            where: {id: contact_id}
        })

        res.json({})
        

    } catch(err){
        res.json({message: 'Error while deleting the contact; ' + err})
        
    }
    
};