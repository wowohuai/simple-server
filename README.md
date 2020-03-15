# simple-server
express搭建后台接口, 学习ing



## powershell 创建文件

$null > server.js   (编码有问题)

## body-parser

express 4.16+不再需要额外安装body-parser了

## bcrypt

对密码进行加密处理

## jsonwebtoken

payload中不能存储密码， 是可以被解码的
// 由 HMACSHA256 算法进行签名，secret 不能外泄
const sign = HMACSHA256(base64.encode(header) + '.' + base64.encode(payload), secret)


// jwt 由三部分拼接而成
const jwt = base64.encode(header) + '.' + base64.encode(payload) + '.' + sign
