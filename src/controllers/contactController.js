const Contact = require('../models/contactModel')
const contactService = require('../services/contactService')

const getContact = async (req, res) => {
  let contactList = await Contact.find()
  // if query params exist, search by name
  // make middleware for query params
  res.json({ message: "get all contacts", content: contactList })
}

const getContactById = async (req, res) => {
  let id = req.params.id
  let result = await contactService.findById(id)
  res.json({ message: `get contact with id = ${req.params.id}`, data: result })
}

const addContact = async (req, res) => {
  let payload = { firstName, lastName, phone, email, address } = req.body
  let result = await contactService.add(payload)
  res.json({ message: "add new contact", content: result })
}

const updateContact = (req, res) => {
  res.json({ message: `update contact with id = ${req.params.id}`, content: req.body })
}

const deleteContact = async (req, res) => {
  let id = req.params.id
  let result = await contactService.deleteById(id)
  res.json({ message: `deleting contact with id = ${req.params.id}`, data: result })
}

module.exports = {
  getContact,
  getContactById,
  addContact,
  updateContact,
  deleteContact
}