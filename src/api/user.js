const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const { secretKey } = require('../config/base')
const auth = require('../middleware/auth')

router.get('/profile', auth, async (req, res) => {
  res.send(req.user)
})


router.post('/register', async (req, res) => {
  const user = await User.create({
    uname: req.body.uname,
    upass: String(req.body.upass)
  })
  res.send(user)
})

router.post('/login', async (req, res) => {
  const user = await User.findOne({
    uname: req.body.uname
  })
  if (!user) {
    return res.status(422).send({
      message: '用户不存在'
    })
  }

  const isPassValid = bcrypt.compareSync(String(req.body.upass), user.upass)
  if (!isPassValid) {
    return res.status('422').send({
      message: '密码错误'
    })
  }
  const token = jwt.sign({
    id: user._id,
    // 时效设为10分钟
    iat: Math.floor(Date.now / 1000) - 10
  }, secretKey)
  res.status(200).send({
    message: '登录成功',
    token
  })
})

module.exports = router
