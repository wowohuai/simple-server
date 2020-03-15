const express = require('express')
const { port, hostname } = require('./config/base')
const route = require('./route')
require('./config/db')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))
route(app)

app.listen(port, hostname, () => {
  console.log(`应用运行在${hostname}://${port}`);
})
