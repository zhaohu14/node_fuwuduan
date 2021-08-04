
var mysql = require('mysql');
let pool = mysql.createPool({
  conectionaLimit: 5,
  queueLimit: 10,
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '123456',
  databese: 'huiyuanguanli',
  idleTimeoutMillis : 30000,
})

function db(mysql_statements, _call, _errback) {
  pool.getConnection((err, conn) => {
    if (err) {
      _errback(err)
      return
    }
    conn.query('use huiyuanguanli')  // 每次查询前先指定到指定数据库
    conn.query(mysql_statements, (err, result) => {
      if (err) {
        return _errback(err)
         
      }
      _call(result)
    })
    conn.release()
  })

}

module.exports = db