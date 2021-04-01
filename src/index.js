const express = require('express')
const app = express()

const contactRouter = require('./routes/contact')

app.use(express.json())
app.use('/contact', contactRouter)

app.listen(8000)