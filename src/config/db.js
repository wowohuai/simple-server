const mongoose = require('mongoose')

const dbURL = 'mongodb://localhost:27017/simple-server'

mongoose.set('useCreateIndex', true)

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
