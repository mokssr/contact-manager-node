const contactService = require('../services/contactService')
const { formatResponse, contactMessageTemplate: message } = require('../helpers/responseFormatter')

const getContact = async (req, res) => {
  // get data for database query
  let { limit, page, name } = req.query
  // (WIP) make middleware for query params
  let contactList = await contactService.list(limit, page, name)
  res.send(formatResponse(contactList))
}

const getContactById = async (req, res) => {
  let id = req.params.id
  let result = await contactService.findById(id)
  res.send(formatResponse(result))
}

const addContact = async (req, res) => {
  let payload = { firstName, lastName, phone, email, address } = req.body
  let result = await contactService.add(payload)
  res.send(formatResponse(result, true, message.added))
}

const updateContact = (req, res) => {
  res.send(formatResponse({}, true, message.updated))
}

const deleteContact = async (req, res) => {
  let id = req.params.id
  let result = await contactService.deleteById(id)
  res.send(formatResponse(result, true, message.deleted))
}

module.exports = {
  getContact,
  getContactById,
  addContact,
  updateContact,
  deleteContact
}