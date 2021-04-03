const Contact = require('../models/contactModel')

// get all with optional pagination

// find one by id
exports.findById = async (_id) => {
  let result = await Contact.findById(_id)
  return result ? result : null
}

// add new record
exports.add = async (payload) => {
  let instance = new Contact({
    firstName: payload.firstName,
    lastName: payload.lastName,
    phone: payload.phone,
    email: payload.email,
    address: payload.address,
  })

  let result = await instance.save()
  return result
}
// update by id

// delete by id
exports.deleteById = async (_id) => {
  let result = await Contact.findByIdAndDelete(_id)
  return result ? result : null
}