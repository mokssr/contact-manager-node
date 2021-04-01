const getContact = (req, res) => {
  // if query params exist, search by name
  // make middleware for query params
  res.json({ message: "get all contacts" })
}

const getContactById = (req, res) => {
  res.json({ message: `get contact with id = ${req.params.id}` })
}

const addContact = (req, res) => {
  res.json({ message: "add new contact", content: req.body })
}

const updateContact = (req, res) => {
  res.json({ message: `update contact with id = ${req.params.id}`, content: req.body })
}

const deleteContact = (req, res) => {
  res.json({ message: `deleting contact with id = ${req.params.id}` })
}

module.exports = {
  getContact,
  getContactById,
  addContact,
  updateContact,
  deleteContact
}