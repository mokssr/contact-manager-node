const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ContactSchema = new Schema({
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  address: String
}, { timestamps: true })

let Contact = module.exports = mongoose.model('Contact', ContactSchema)