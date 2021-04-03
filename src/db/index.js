const mongoose = require('mongoose')

exports.initDBConnection = async () => {
  await mongoose.connect('mongodb+srv://mokssr:Password1@cluster0.fou4f.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  console.log('connected to mongodb')

  // WIP add connection handler for reconnections if fails
}