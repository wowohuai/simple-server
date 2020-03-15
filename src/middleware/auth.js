const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secretKey } = require('../config/base')

const auth = async (req, res, next) => {
  const raw = req.headers.authorization.split(' ').pop()

  try {
    const tokenData = jwt.verify(raw, secretKey)
    req.user = await User.findById(tokenData.id)
    next()
  } catch (error) {
    res.status(401).send({
      message: 'token无效'
    })
  }
}

module.exports = auth
