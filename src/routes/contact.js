const express = require('express')
const contact = express.Router()
const contactController = require('../controllers/contactController')

contact.get('/', contactController.getContact)

contact.get('/:id', contactController.getContactById)

contact.post('/', contactController.addContact)

contact.put('/:id', contactController.updateContact)

contact.delete('/:id', contactController.deleteContact)

module.exports = contact