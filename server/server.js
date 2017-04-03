const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('short'))