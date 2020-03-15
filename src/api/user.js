const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')

router.get('/profile', async (req, res) => {
  const list = await User.find()
  res.send(list)
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
  res.status(200).send({
    user,
    token: '...'
  })
})

module.exports = router
