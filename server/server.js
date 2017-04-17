const express = require('express')

const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(bodyParser.urlencoded({ extended: false }))
// app.use(morgan('short'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.get('/test', (req, res) => {
  console.log('test route hit')
  res.status(200).send('HAI WURLD')
})
app.use(express.static(path.join(__dirname, '/../app/build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../app/build/index.html'))
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('App listening on port:', port)
})
