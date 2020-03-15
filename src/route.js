const user = require('./api/user')


const route = (app) => {
  app.all('*', async (req, res, next) => {
    res.header('Access-Control-Allow-origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept') //访问控制允许报头 X-Requested-With: xhr请求
    res.header('Access-Control-Allow-Metheds', 'PUT, POST, GET, DELETE, OPTIONS'); //访问控制允许方法
    res.header('X-Powered-By', 'nodejs') //自定义头信息，表示服务端用nodejs
    res.header('Content-Type', 'application/json;charset=utf-8')
    next()
  })

  app.use('/api/user', user)
}

module.exports = route
