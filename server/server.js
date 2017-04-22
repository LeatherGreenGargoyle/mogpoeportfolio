require('dotenv').config()
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '/../app/build')))
// app.use(morgan('short'))

app.get('/getTest', (req, res) => {
  console.log('get test route hit')
  res.status(200).send('HAI WURLD')
})
app.post('/postTest', (req, res) => {
  console.log(`Post Test, req.body is ${Object.keys(req.body).length}`)
  res.send(req.body)
})
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../app/build/index.html'))
})

require('./routes')(app)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('App listening on port:', port)
})

module.exports = app
