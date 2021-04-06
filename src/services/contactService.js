const Contact = require('../models/contactModel')

// get all with optional pagination
exports.list = async (limit = 5, page = 1, name = null) => {
  let query = {
    limit: parseInt(limit < 1 ? 1 : limit), //set minimum limit to 1
    skip: limit * (page - 1) //skip for pagination
  }

  let nameReg = new RegExp(name, 'i')
  let nameQuery = name ? {
    // look for both first name and last name field
    $or: [{ firstName: nameReg }, { lastName: nameReg }]
  } : {}

  let result = await Contact.find(nameQuery, {}, query)
  return result ? result : null
}

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
  return result ? result : null
}
// update by id

// delete by id
exports.deleteById = async (_id) => {
  let result = await Contact.findByIdAndDelete(_id)
  return result ? result : null
}