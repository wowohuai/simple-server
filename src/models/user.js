const mongoose = require('mongoose')

const User = mongoose.Schema({
  uname: {
    type: String,
    unique: true
  },
  upass: {
    type: String,
    set(value) {
      // 进行加密处理
      return require('bcrypt').hashSync(value, 10)
    }
  }
})

module.exports = mongoose.model('user', User)
