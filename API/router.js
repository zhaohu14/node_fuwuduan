const express = require('express');
const router = express.Router();
const db = require('../mysql.js')



function dbs (statements, _call, _errback) {
  db(statements, _call, _errback)
}
// 登录接口
router.post('/login', (req, res, next) => {
  const user_name = req.query
  console.log(user_name.username)
  // 数据库查询数据
  dbs(`SELECT * FROM user_password WHERE user_name = "${user_name.username}"`, function (rows, fields, end) {
    if (rows[0].password === user_name.password) {
      res.json({
        success: true,
        data: '登录成功'
      })
    } else {
      res.json({
        success: false,
        msg: '用户名不存在或密码错误'
      })
    }
  }, err => {
    res.json({
      success: false,
      data: err
    })
  })
});


module.exports = router;