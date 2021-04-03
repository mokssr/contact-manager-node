const express = require('express')
const { initDBConnection } = require('./db/index')

const app = express()
initDBConnection()

const contactRouter = require('./routes/contact')

app.use(express.json())
app.use('/contact', contactRouter)

app.listen(8000)