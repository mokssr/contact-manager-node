const contactService = require('../services/contactService')
const { formatResponse, contactMessageTemplate: message, queryMessageTemplate: queryMessage } = require('../helpers/responseFormatter')

const getContact = async (req, res) => {
  // get data for database query
  let { limit, page, name } = req.query
  if (!parseInt(limit) || limit < 1) {
    res.status(400).send(formatResponse(null, false, queryMessage.invalidLimit))
    return
  }
  if (!parseInt(page) || page < 1) {
    res.status(400).send(formatResponse(null, false, queryMessage.invalidPage))
    return
  }
  if (typeof name != 'undefined' || name) {
    name = decodeURI(name.trim())
  }

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

const updateContact = async (req, res) => {
  let id = req.params.id
  let payload = { firstName, lastName, phone, email, address } = req.body
  let result = await contactService.update(id, payload)
  res.send(formatResponse(result, true, message.updated))
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